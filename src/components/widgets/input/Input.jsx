import { useEffect, useContext, memo } from "react";
import { useFormContext } from "react-hook-form";
import FormStateContext from "../../../context/formState";
import get from "lodash/get";
import { InputContainer } from "./Input.styles";

const Input = ({ ...item }) => {
  const { rules, value, defaultValue, pathId, id, type } = item;
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
    <InputContainer className="control-container input-container">
      <label className="label input-label" htmlFor={controlpathId}>
        {item.label}
      </label>
      <input
        className="control input"
        type={type}
        {...register(controlpathId, { ...rules })}
        onChange={(event) => handleUpdateControl(pathId, event.target.value)}
        value={value || defaultValue || ""}
        id={controlpathId}
      />
      {errorMessage && <div className="error input-error">{errorMessage}</div>}
    </InputContainer>
  );
};

export default memo(Input);
