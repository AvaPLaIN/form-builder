import { memo } from "react";
import Input from "../input";
import List from "../list";

const Controller = ({ item, ...props }) => {
  const controlMap = {
    input: Input,
    list: List,
  };

  const Component = controlMap[item.control];

  return (
    <>
      <Component key={item.uuid} {...item} {...props} />
    </>
  );
};

export default memo(Controller);
