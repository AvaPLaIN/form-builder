import { useEffect, useContext, memo } from "react";
import { useFormContext } from "react-hook-form";
import FormStateContext from "../../../context/formState";
import get from "lodash/get";

const Select = ({ ...item }) => {
  const { rules, value, defaultValue, pathId, id, type, options } = item;
  const { handleUpdateControl } = useContext(FormStateContext);
  //* get the form context
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
    <div className="control-container select-container">
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
    </div>
  );
};

export default memo(Select);
