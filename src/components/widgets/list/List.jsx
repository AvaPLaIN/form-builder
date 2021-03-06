import { memo, useContext, useState } from "react";
import FormStateContext from "../../../context/formState";
import ListSection from "./components/list-section";
import ListContainer from "./List.styles";

const List = ({ items, ...list }) => {
  const { creatable, label, id, visible, swapable } = list;
  const { handleAddListSectionToList } = useContext(FormStateContext);
  const [isListOpen, setIsListOpen] = useState(visible);

  const currSavePathId = list.savePathId || id;
  const currObjectPathId = list.objectPathId || id;

  return (
    <ListContainer className="list-container" isListOpen={isListOpen}>
      <div className="list-controls">
        {label?.visible && (
          <button
            type="button"
            className="list-label"
            onClick={() => setIsListOpen((prev) => !prev)}
          >
            {label?.text}
          </button>
        )}
        {creatable && (
          <button
            className="add-list-section-button"
            type="button"
            onClick={() => handleAddListSectionToList(currObjectPathId)}
          >
            Add
          </button>
        )}
      </div>
      <div className="list-wrapper">
        {items.map((section, index) => {
          //* extend pathId with the index of the section
          const savePathId = `${currSavePathId}.${index}`;
          const objectPathId = `${currObjectPathId}.items.${index}`;

          return (
            <ListSection
              key={savePathId}
              items={section}
              swapable={swapable}
              savePathId={savePathId}
              objectPathId={objectPathId}
              pathIdInfo={{
                savePathId: currSavePathId,
                objectPathId: currObjectPathId,
                index,
              }}
            />
          );
        })}
      </div>
    </ListContainer>
  );
};

export default memo(List);
