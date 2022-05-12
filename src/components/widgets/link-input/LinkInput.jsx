import get from "lodash/get";
import { memo, useContext, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { BsFillCloudFog2Fill } from "react-icons/bs";
import { FaCopy } from "react-icons/fa";
import FormStateContext from "../../../context/formState";
import LinkInputContainer from "./LinkInput.styles";

const ControllIcons = ({ value }) => {
  const handleCopyValue = () => navigator.clipboard.writeText(value);

  return (
    <div className="input-control-icons">
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

const Input = ({ ...item }) => {
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
    <LinkInputContainer
      className="control-container input-container"
      data-testid="input"
      layout={layout}
    >
      {label?.visible && (
        <label className="label input-label" htmlFor={currSavePathId}>
          {label?.text}
        </label>
      )}
      <div className="input-wrapper">
        <input
          className="control input"
          type={type}
          onChange={handleOnChange}
          {...registerProps}
          id={currSavePathId}
          placeholder={placeholder}
        />
        <ControllIcons value={value} />
      </div>
      {errorMessage && <div className="error input-error">{errorMessage}</div>}
    </LinkInputContainer>
  );
};

export default memo(Input);
