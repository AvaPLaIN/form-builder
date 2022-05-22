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
    group: Group,
    input: Input,
    urlInput: UrlInput,
    list: List,
    select: Select,
    multiSelect: MultiSelect,
    passwordInput: PasswordInput,
    textarea: Textarea,
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
