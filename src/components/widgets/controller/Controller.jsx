import { memo } from "react";
import Group from "../group";
import Input from '../input';
import List from "../list";
import Select from "../select";

const Controller = ({ item, ...props }) => {
  const controlMap = {
    group: Group,
    input: Input,
    list: List,
    select: Select,
  };

  const Component = controlMap[item.control];

  return <Component key={item.uuid} {...item} {...props} />;
};

export default memo(Controller);
