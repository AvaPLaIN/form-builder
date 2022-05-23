import { memo } from "react";
import CheckboxContainer from "./Checkbox.styles";

function Checkbox({ errorMessage, id, registerProps, onChange, ...item }) {
  //* destructuring props
  const { layout, label } = item;

  const handleOnChange = (event) => {
    const modifiedEvent = { target: { value: event.target.checked } };
    onChange(modifiedEvent);
  };

  return (
    <CheckboxContainer
      className="control-container checkbox-container"
      data-testid="checkbox"
      layout={layout}
    >
      {label?.visible && (
        <label className="label checkbox-label" htmlFor={id}>
          {label?.text}
        </label>
      )}
      <input
        className="control checkbox"
        type="checkbox"
        onChange={handleOnChange}
        {...registerProps}
        id={id}
      />
      {errorMessage && (
        <div className="error checkbox-error">{errorMessage}</div>
      )}
    </CheckboxContainer>
  );
}

export default memo(Checkbox);
