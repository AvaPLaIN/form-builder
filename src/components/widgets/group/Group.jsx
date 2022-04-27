import React from "react";
import Controller from "../controller/Controller";
import { GroupContainer } from "./Group.styles";

const Group = ({ ...item }) => {
  const { label, items, id } = item;

  const currSavePathId = item.savePathId || id;
  const currObjectPathId = item.objectPathId || id;

  return (
    <GroupContainer className="group-container">
      <div className="group-label">{label}</div>
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
