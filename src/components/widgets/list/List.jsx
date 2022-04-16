import { useState, useContext, memo } from "react";
import FormStateContext from "../../../context/formState";
import ListSection from "./components/list-section";
import { ListContainer } from "./List.styles";

const List = ({ items, ...list }) => {
  const { creatable, label, id, visible, swapable } = list;
  const { handleAddListSectionToList } = useContext(FormStateContext);
  const [isListOpen, setIsListOpen] = useState(visible);

  const currPathId = list.pathId || id;

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
            onClick={() => handleAddListSectionToList(currPathId)}
          >
            Add
          </button>
        )}
      </div>
      <div className="list-wrapper">
        {items.map((section, index) => {
          //* extend pathId with the index of the section
          const pathId = `${currPathId}.${index}`;

          return (
            <ListSection
              key={pathId}
              items={section}
              swapable={swapable}
              pathId={pathId}
              pathInfo={{
                pathId: currPathId,
                index: index,
              }}
            />
          );
        })}
      </div>
    </ListContainer>
  );
};

export default memo(List);
