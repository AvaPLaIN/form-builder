import { memo } from "react";
import List from "../list";
import Input from "../input";
import Select from "../select";

const Controller = ({ item, ...props }) => {
  const controlMap = {
    list: List,
    input: Input,
    select: Select,
  };

  const Component = controlMap[item.control];

  return (
    <>
      <Component key={item.uuid} {...item} {...props} />
    </>
  );
};

export default memo(Controller);
