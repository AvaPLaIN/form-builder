import Controller from "../controller";
import GroupContainer from "./Group.styles";

const Group = ({ ...item }) => {
  const { label, items, id, layout } = item;

  const currSavePathId = item.savePathId || id;
  const currObjectPathId = item.objectPathId || id;

  return (
    <GroupContainer className="group-container" layout={layout}>
      {label?.visible && <div className="group-label">{label?.text}</div>}
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
