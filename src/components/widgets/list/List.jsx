import { useState, useContext, memo } from "react";
import FormStateContext from "../../../context/formState";
import ListSection from "./components/list-section";
import { ListWrapper } from "./List.styles";

const List = ({ items, ...list }) => {
  const { creatable, label, id, visible } = list;
  const { handleAddListSectionToList } = useContext(FormStateContext);
  const [isListOpen, setIsListOpen] = useState(visible);

  return (
    <div className="list-container">
      <p onClick={() => setIsListOpen((prev) => !prev)}>{label}</p>
      {creatable && (
        <button
          type="button"
          onClick={() => handleAddListSectionToList(list.pathId || id)}
        >
          Add
        </button>
      )}
      <ListWrapper isListOpen={isListOpen}>
        {items.map((section, index) => {
          //* extend pathId with the index of the section
          const pathId = `${list.pathId || id}.${index}`;

          return <ListSection key={pathId} items={section} pathId={pathId} />;
        })}
      </ListWrapper>
    </div>
  );
};

export default memo(List);
