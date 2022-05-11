import { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Controller from "../controller";
import GroupContainer from "./Group.styles";

const Toggle = ({ isGroupOpen, setIsGroupOpen }) => {
  return (
    <button type="button" onClick={() => setIsGroupOpen(!isGroupOpen)}>
      {isGroupOpen ? (
        <MdOutlineKeyboardArrowDown />
      ) : (
        <MdOutlineKeyboardArrowRight />
      )}
    </button>
  );
};

const Header = ({ label, isGroupOpen, setIsGroupOpen }) => {
  return (
    <div className="group-header">
      <div className="group-label">{label?.text}</div>

      <Toggle isGroupOpen={isGroupOpen} setIsGroupOpen={setIsGroupOpen} />
    </div>
  );
};

const Group = ({ ...item }) => {
  const { label, items, id, layout } = item;

  const [isGroupOpen, setIsGroupOpen] = useState(true);

  const currSavePathId = item.savePathId || id;
  const currObjectPathId = item.objectPathId || id;

  return (
    <GroupContainer
      className="group-container"
      layout={layout}
      isGroupOpen={isGroupOpen}
    >
      {label?.visible && (
        <Header
          label={label}
          isGroupOpen={isGroupOpen}
          setIsGroupOpen={setIsGroupOpen}
        />
      )}

      <div className="group-items">
        {Object.entries(items).map(([key, value]) => {
          const savePathId = `${currSavePathId}.${key}`;
          const objectPathId = `${currObjectPathId}.items.${key}`;

          return (
            <Controller
              key={savePathId}
              item={value}
              savePathId={savePathId}
              objectPathId={objectPathId}
            />
          );
        })}
      </div>
    </GroupContainer>
  );
};

export default Group;
