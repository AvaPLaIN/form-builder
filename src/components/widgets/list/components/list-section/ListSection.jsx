import { memo } from "react";
import Controller from "../../../controller";

const ListSection = ({ items, pathId: id }) => {
  return (
    <div className="list-section">
      {Object.values(items).map((item) => {
        //* extend pathId with id of the item
        const pathId = `${id}.${item.id}`;

        return (
          <Controller
            key={`${pathId}.${item?.uuid}`}
            item={item}
            pathId={pathId}
          />
        );
      })}
    </div>
  );
};

export default memo(ListSection);
