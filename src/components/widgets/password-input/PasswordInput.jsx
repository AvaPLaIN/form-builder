import { memo, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaCopy } from "react-icons/fa";
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

const PasswordInput = ({
  errorMessage,
  id,
  registerProps,
  onChange,
  ...item
}) => {
  //* destructuring props
  const { layout, label, placeholder, value } = item;

  const [showPassword, setShowPassword] = useState(false);

  const handleToggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <PasswordInputContainer
      className="control-container password-input-container"
      data-testid="input"
      layout={layout}
    >
      {label?.visible && (
        <label className="label password-input-label" htmlFor={id}>
          {label?.text}
        </label>
      )}
      <div className="input-wrapper">
        <input
          className="control password-input"
          type={showPassword ? "text" : "password"}
          onChange={onChange}
          {...registerProps}
          id={id}
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
