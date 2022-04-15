import { useState, useContext, memo } from "react";
import FormStateContext from "../../../context/formState";
import ListSection from "./components/list-section";
import { ListContainer } from "./List.styles";

const List = ({ items, ...list }) => {
  const { creatable, label, id, visible } = list;
  const { handleAddListSectionToList } = useContext(FormStateContext);
  const [isListOpen, setIsListOpen] = useState(visible);

  return (
    <ListContainer isListOpen={isListOpen} className="list-container">
      <div className="list-controls">
        <p
          className="list-label"
          onClick={() => setIsListOpen((prev) => !prev)}
        >
          {label}
        </p>
        {creatable && (
          <button
            className="add-list-section-button"
            type="button"
            onClick={() => handleAddListSectionToList(list.pathId || id)}
          >
            Add
          </button>
        )}
      </div>
      <div className="list-wrapper">
        {items.map((section, index) => {
          //* extend pathId with the index of the section
          const pathId = `${list.pathId || id}.${index}`;

          return <ListSection key={pathId} items={section} pathId={pathId} />;
        })}
      </div>
    </ListContainer>
  );
};

export default memo(List);
