import { memo } from "react";
import { useFormContext } from "react-hook-form";
import get from "lodash/get";
import { InputContainer } from "./Input.styles";

const Input = ({ ...item }) => {
  const { rules, defaultValue, pathId, id, type } = item;
  //* get the form context
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const controlpathId = pathId || id;
  const errorMessage = get(errors, controlpathId)?.message;

  return (
    <InputContainer className="control-container input-container">
      <label className="label input-label" htmlFor={controlpathId}>
        {item.label}
      </label>
      <input
        className="control input"
        type={type}
        {...register(controlpathId, { value: defaultValue, ...rules })}
        id={controlpathId}
      />
      {errorMessage && <div className="error input-error">{errorMessage}</div>}
    </InputContainer>
  );
};

export default memo(Input);
