import get from "lodash/get";
import { memo, useContext, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import FormStateContext from "../../../context/formState";
import { InputContainer } from "./Input.styles";

const Input = ({ ...item }) => {
  //* destructuring props
  const { rules, value, pathId, id, type } = item;

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
    <InputContainer className="control-container input-container">
      <label className="label input-label" htmlFor={controlpathId}>
        {item.label}
      </label>
      <input
        className="control input"
        type={type}
        onChange={handleOnChange}
        {...registerProps}
        id={controlpathId}
      />
      {errorMessage && <div className="error input-error">{errorMessage}</div>}
    </InputContainer>
  );
};

export default memo(Input);
