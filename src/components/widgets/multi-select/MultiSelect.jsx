import { memo } from "react";
import MultiSelectContainer from "./MultiSelect.styles";

const MultiSelect = ({
  errorMessage,
  id,
  registerProps,
  onChange,
  ...item
}) => {
  //* destructuring props
  const { layout, label, type, placeholder, options } = item;

  return (
    <MultiSelectContainer
      className="control-container select-container"
      layout={layout}
    >
      {label?.visible && (
        <label className="label select-label" htmlFor={id}>
          {label?.text}
        </label>
      )}
      <select
        className="control select"
        type={type}
        onChange={onChange}
        {...registerProps}
        id={id}
        placeholder={placeholder}
      >
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errorMessage && <div className="error select-error">{errorMessage}</div>}
    </MultiSelectContainer>
  );
};

export default memo(MultiSelect);
