import { memo } from "react";
import Group from "../group";
import Input from "../input";
import List from "../list";
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
    passwordInput: PasswordInput,
    textarea: Textarea,
    // TODO - add Error Fallback Control
  };

  const Component = controlMap[item.control];

  return <Component key={item.uuid} {...item} {...props} />;
};

export default memo(Controller);
