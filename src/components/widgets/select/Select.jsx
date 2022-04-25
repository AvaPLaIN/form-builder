import get from "lodash/get";
import { memo, useContext, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import FormStateContext from "../../../context/formState";
import { SelectContainer } from "./Select.styles";

const Select = ({ ...item }) => {
  //* destructuring props
  const { rules, value, pathId, id, type, options } = item;

  const { handleUpdateControl } = useContext(FormStateContext);

  //* get the form context
  const {
    register,
    unregister,
    formState: { errors },
  } = useFormContext();

  //* get controlPathId for control
  const controlpathId = pathId || id;

  //* register the control
  const { onChange, ...registerProps } = register(controlpathId, {
    value: value || "",
    ...rules,
  });

  //* get the error message for control
  const errorMessage = get(errors, controlpathId)?.message;

  //* unregister control when unmounting
  useEffect(() => {
    return () => unregister(controlpathId);
  }, [controlpathId, unregister]);

  //* update the control value
  const handleOnChange = (event) => {
    handleUpdateControl(controlpathId, event.target.value);
    onChange(event);
  };

  return (
    <SelectContainer className="control-container select-container">
      <label className="label select-label" htmlFor={controlpathId}>
        {item.label}
      </label>
      <select
        className="control select"
        type={type}
        onChange={handleOnChange}
        {...registerProps}
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
