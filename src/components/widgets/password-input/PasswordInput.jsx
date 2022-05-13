import get from "lodash/get";
import { memo, useContext, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaCopy } from "react-icons/fa";
import FormStateContext from "../../../context/formState";
import PasswordInputContainer from "./PasswordInput.styles";

const ControllIcons = ({ value, showPassword, toggleShowPassword }) => {
  const handleCopyValue = () => navigator.clipboard.writeText(value);

  return (
    <div className="password-input-control-icons">
      <button
        className="copy-icon"
        title="copy"
        type="button"
        onClick={handleCopyValue}
      >
        <FaCopy />
      </button>
      <button
        className="toggle-type-icon"
        title={showPassword ? "hide password" : "show password"}
        type="button"
        onClick={toggleShowPassword}
      >
        {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
      </button>
    </div>
  );
};

const PasswordInput = ({ ...item }) => {
  const {
    rules,
    value,
    savePathId,
    objectPathId,
    id,
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

  const [showPassword, setShowPassword] = useState(false);

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

  const handleToggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <PasswordInputContainer
      className="control-container password-input-container"
      data-testid="input"
      layout={layout}
    >
      {label?.visible && (
        <label className="label password-input-label" htmlFor={currSavePathId}>
          {label?.text}
        </label>
      )}
      <div className="input-wrapper">
        <input
          className="control password-input"
          type={showPassword ? "text" : "password"}
          onChange={handleOnChange}
          {...registerProps}
          id={currSavePathId}
          placeholder={placeholder}
        />
        <ControllIcons
          value={value}
          showPassword={showPassword}
          toggleShowPassword={handleToggleShowPassword}
        />
      </div>
      {errorMessage && (
        <div className="error password-input-error">{errorMessage}</div>
      )}
    </PasswordInputContainer>
  );
};

export default memo(PasswordInput);
