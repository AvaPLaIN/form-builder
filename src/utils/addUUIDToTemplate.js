import cloneDeep from "lodash/cloneDeep";
import { v4 as uuidv4 } from "uuid";

const addUUIDToTemplate = (template) => {
  const clonedTemplate = cloneDeep(template);

  const loopOverObject = (object) => {
    Object.values(object).forEach((item) => {
      if (!item?.uuid) {
        item.uuid = uuidv4();
      }
      if (item?.items) {
        loopOverObject(item.items[0]);
      }
    });
  };

  loopOverObject(clonedTemplate);

  return clonedTemplate;
};

export default addUUIDToTemplate;
