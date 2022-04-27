import { memo, useContext } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import FormStateContext from "../../../../../context/formState";
import Controller from "../../../controller";
import { ListSectionContainer } from "./ListSection.styles";

const ListSection = ({
  items,
  savePathId: currSavePathId,
  objectPathId: currObjectPathId,
  pathInfo,
  swapable,
}) => {
  const {
    handleDeleteListSectionFromList,
    handleMoveListSectionDown,
    handleMoveListSectionUp,
  } = useContext(FormStateContext);

  return (
    <ListSectionContainer className="list-section-container">
      <div className="controls">
        {swapable && (
          <>
            <button
              type="button"
              onClick={() =>
                handleMoveListSectionUp(pathInfo.pathId, pathInfo.index)
              }
            >
              <IoIosArrowUp />
            </button>
            <button
              type="button"
              onClick={() =>
                handleMoveListSectionDown(pathInfo.pathId, pathInfo.index)
              }
            >
              <IoIosArrowDown />
            </button>
          </>
        )}
        <button
          type="button"
          onClick={() =>
            handleDeleteListSectionFromList(currSavePathId, pathInfo.pathId)
          }
        >
          <MdDeleteOutline />
        </button>
      </div>
      <div className="section">
        {Object.values(items).map((item) => {
          //* extend pathIds with id of the item
          const savePathId = `${currSavePathId}.${item.id}`;
          const objectPathId = `${currObjectPathId}.${item.id}`;

          return (
            <Controller
              key={`${objectPathId}.${item?.uuid}`}
              item={item}
              savePathId={savePathId}
              objectPathId={objectPathId}
            />
          );
        })}
      </div>
    </ListSectionContainer>
  );
};

export default memo(ListSection);
