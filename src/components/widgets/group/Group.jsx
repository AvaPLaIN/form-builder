import React from "react";
import Controller from "../controller/Controller";
import { GroupContainer } from "./Group.styles";

const Group = ({ ...item }) => {
  const { label, items, id } = item;

  const currPathId = item.pathId || id;

  return (
    <GroupContainer className="group-container">
      <div className="group-label">{label}</div>
      <div className="group-items">
        {Object.entries(items).map(([key, value]) => {
          const pathId = `${currPathId}.${key}`;

          return <Controller key={pathId} item={value} pathId={pathId} />;
        })}
      </div>
    </GroupContainer>
  );
};

export default Group;
