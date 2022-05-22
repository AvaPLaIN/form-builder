import { memo } from "react";
import TextareaContainer from "./Textarea.styles";

function Textarea({ errorMessage, id, registerProps, onChange, ...item }) {
  //* destructuring props
  const { layout, label, type, placeholder } = item;

  return (
    <TextareaContainer
      className="control-container textarea-container"
      data-testid="textarea"
      layout={layout}
    >
      {label?.visible && (
        <label className="label textarea-label" htmlFor={id}>
          {label?.text}
        </label>
      )}
      <textarea
        className="control textarea"
        type={type}
        onChange={onChange}
        {...registerProps}
        id={id}
        placeholder={placeholder}
        rows={3}
      />
      {errorMessage && (
        <div className="error textarea-error">{errorMessage}</div>
      )}
    </TextareaContainer>
  );
}

export default memo(Textarea);
