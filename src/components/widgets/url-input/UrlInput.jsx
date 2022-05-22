import { memo } from "react";
import { BsFillCloudFog2Fill } from "react-icons/bs";
import { FaCopy } from "react-icons/fa";
import UrlInputContainer from "./UrlInput.styles";

const ControllIcons = ({ value }) => {
  const handleCopyValue = () => navigator.clipboard.writeText(value);

  return (
    <div className="url-input-control-icons">
      <button
        className="copy-icon"
        title="copy"
        type="button"
        onClick={handleCopyValue}
      >
        <FaCopy />
      </button>
      <button className="visit-icon" title="visit" type="button">
        <a href={value} target="_blank" rel="noreferrer">
          <BsFillCloudFog2Fill />
        </a>
      </button>
    </div>
  );
};

const UrlInput = ({ errorMessage, id, registerProps, onChange, ...item }) => {
  //* destructuring props
  const { layout, label, type, placeholder, value } = item;

  return (
    <UrlInputContainer
      className="control-container url-input-container"
      data-testid="input"
      layout={layout}
    >
      {label?.visible && (
        <label className="label url-input-label" htmlFor={id}>
          {label?.text}
        </label>
      )}
      <div className="input-wrapper">
        <input
          className="control url-input"
          type={type}
          onChange={onChange}
          {...registerProps}
          id={id}
          placeholder={placeholder}
        />
        <ControllIcons value={value} />
      </div>
      {errorMessage && (
        <div className="error url-input-error">{errorMessage}</div>
      )}
    </UrlInputContainer>
  );
};

export default memo(UrlInput);
