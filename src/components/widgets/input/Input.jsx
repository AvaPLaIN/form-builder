import get from "lodash/get";
import { memo, useContext, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import FormStateContext from "../../../context/formState";
import { InputContainer } from "./Input.styles";

const Input = ({ ...item }) => {
  //* destructuring props
  const { rules, value, savePathId, objectPathId, id, type } = item;

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
    <InputContainer
      className="control-container input-container"
      data-testid="input"
    >
      <label className="label input-label" htmlFor={currSavePathId}>
        {item.label}
      </label>
      <input
        className="control input"
        type={type}
        onChange={handleOnChange}
        {...registerProps}
        id={currSavePathId}
      />
      {errorMessage && <div className="error input-error">{errorMessage}</div>}
    </InputContainer>
  );
};

export default memo(Input);
