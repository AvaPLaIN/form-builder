import { memo } from "react";
import InputContainer from "./Input.styles";

function Input({ errorMessage, id, registerProps, onChange, ...item }) {
  //* destructuring props
  const { layout, label, type, placeholder } = item;

  return (
    <InputContainer
      className="control-container input-container"
      data-testid="input"
      layout={layout}
    >
      {label?.visible && (
        <label className="label input-label" htmlFor={id}>
          {label?.text}
        </label>
      )}
      <input
        className="control input"
        type={type}
        onChange={onChange}
        {...registerProps}
        id={id}
        placeholder={placeholder}
      />
      {errorMessage && <div className="error input-error">{errorMessage}</div>}
    </InputContainer>
  );
}

export default memo(Input);
