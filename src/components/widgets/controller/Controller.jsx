import { memo } from "react";
import ControlWrapper from "../control-wrapper/ControlWrapper";
import Group from "../group";
import Input from "../input";
import List from "../list";
import MultiSelect from "../multi-select";
import PasswordInput from "../password-input";
import Select from "../select";
import Textarea from "../textarea";
import UrlInput from "../url-input";

const Controller = ({ item, ...props }) => {
  const controlMap = {
    //* Layout Controls
    list: List,
    group: Group,

    //* Input Controls
    input: Input,
    passwordInput: PasswordInput,
    urlInput: UrlInput,
    textarea: Textarea,

    //* Select Controls
    select: Select,
    multiSelect: MultiSelect,
    // TODO - add Error Fallback Control
  };

  //* list of layout controls
  const layoutControls = ["group", "list"];

  //* get the control component
  const Component = controlMap[item.control];

  //* layout controls should not be wrapped in ControlWrapper
  if (layoutControls.includes(item.control)) {
    return <Component key={item.uuid} {...item} {...props} />;
  }

  //* render normal controls
  return (
    <ControlWrapper Control={Component} key={item.uuid} {...item} {...props} />
  );
};

export default memo(Controller);
