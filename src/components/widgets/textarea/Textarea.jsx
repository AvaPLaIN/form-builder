import get from "lodash/get";
import { memo, useContext, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import FormStateContext from "../../../context/formState";
import TextareaContainer from "./Textarea.styles";

function Textarea({ ...item }) {
  //* destructuring props
  const {
    rules,
    value,
    savePathId,
    objectPathId,
    id,
    type,
    layout,
    placeholder,
    label,
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
    <TextareaContainer
      className="control-container textarea-container"
      data-testid="textarea"
      layout={layout}
    >
      {label?.visible && (
        <label className="label textarea-label" htmlFor={currSavePathId}>
          {label?.text}
        </label>
      )}
      <textarea
        className="control textarea"
        type={type}
        onChange={handleOnChange}
        {...registerProps}
        id={currSavePathId}
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
