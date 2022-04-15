import { useContext, memo } from "react";
import FormStateContext from "../../../../../context/formState";
import { ListSectionContainer } from "./ListSection.styles";
import Controller from "../../../controller";

const ListSection = ({ items, pathId: id }) => {
  const { handleDeleteListSectionFromList } = useContext(FormStateContext);

  return (
    <ListSectionContainer className="list-section-container">
      <div className="controls">
        <button>Up</button>
        <button>Down</button>
        <button
          type="button"
          onClick={() => handleDeleteListSectionFromList(id)}
        >
          Delete
        </button>
      </div>
      <div className="section">
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
    </ListSectionContainer>
  );
};

export default memo(ListSection);
