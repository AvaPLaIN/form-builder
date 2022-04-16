import { useEffect, useContext, memo } from "react";
import { useFormContext } from "react-hook-form";
import FormStateContext from "../../../context/formState";
import get from "lodash/get";
import { SelectContainer } from "./Select.styles";

const Select = ({ ...item }) => {
  const { rules, pathId, id, type, options } = item;
  const { handleUpdateControl } = useContext(FormStateContext);
  const {
    register,
    unregister,
    formState: { errors },
  } = useFormContext();

  const controlpathId = pathId || id;

  const errorMessage = get(errors, controlpathId)?.message;

  useEffect(() => {
    return () => unregister(controlpathId);
  }, [controlpathId, unregister]);

  return (
    <SelectContainer className="control-container select-container">
      <label className="label select-label" htmlFor={controlpathId}>
        {item.label}
      </label>
      <select
        className="control select"
        type={type}
        {...register(controlpathId, { ...rules })}
        onChange={(event) =>
          handleUpdateControl(controlpathId, event.target.value)
        }
        id={controlpathId}
      >
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errorMessage && <div className="error select-error">{errorMessage}</div>}
    </SelectContainer>
  );
};

export default memo(Select);
