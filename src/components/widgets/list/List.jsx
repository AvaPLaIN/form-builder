import { memo, useContext, useState } from "react";
import FormStateContext from "../../../context/formState";
import ListSection from "./components/list-section";
import { ListContainer } from "./List.styles";

const List = ({ items, ...list }) => {
  const { creatable, label, id, visible, swapable } = list;
  const { handleAddListSectionToList } = useContext(FormStateContext);
  const [isListOpen, setIsListOpen] = useState(visible);

  const currSavePathId = list.savePathId || id;
  const currObjectPathId = list.objectPathId || id;

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
              pathInfo={{
                pathId: currSavePathId,
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
