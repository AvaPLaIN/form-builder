import get from "lodash/get";
import { memo, useContext, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import FormStateContext from "../../../context/formState";
import SelectContainer from "./Select.styles";

const Select = ({ ...item }) => {
  //* destructuring props
  const {
    rules,
    value,
    savePathId,
    objectPathId,
    id,
    type,
    options,
    layout,
    label,
    placeholder,
  } = item;

  const { handleUpdateControl } = useContext(FormStateContext);

  //* get the form context
  const {
    register,
    unregister,
    formState: { errors },
  } = useFormContext();

  //* get currPathIds for control
  const currSavePathId = savePathId || id;
  const currObjectPathId = objectPathId || id;

  //* register the control
  const { onChange, ...registerProps } = register(currSavePathId, {
    value: value || "",
    ...rules,
  });

  //* get the error message for control
  const errorMessage = get(errors, currSavePathId)?.message;

  //* unregister control when unmounting
  useEffect(() => {
    return () => unregister(currSavePathId);
  }, [currSavePathId, unregister]);

  //* update the control value
  const handleOnChange = (event) => {
    handleUpdateControl(currObjectPathId, event.target.value);
    onChange(event);
  };

  return (
    <SelectContainer
      className="control-container select-container"
      layout={layout}
    >
      {label?.visible && (
        <label className="label select-label" htmlFor={currSavePathId}>
          {label?.text}
        </label>
      )}
      <select
        className="control select"
        type={type}
        onChange={handleOnChange}
        {...registerProps}
        id={currSavePathId}
        placeholder={placeholder}
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
