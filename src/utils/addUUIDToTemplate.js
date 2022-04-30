import cloneDeep from "lodash/cloneDeep";
import { v4 as uuidv4 } from "uuid";

const addUUIDToTemplate = (template) => {
  const clonedTemplate = cloneDeep(template);

  const loopOverObject = (object) => {
    Object.values(object).forEach((item) => {
      if (!item?.uuid) {
        // eslint-disable-next-line no-param-reassign
        item.uuid = uuidv4();
      }
      if (item?.items && Array.isArray(item?.items) && item?.items) {
        loopOverObject(item.items[0]);
      }
      if (item?.items && !Array.isArray(item?.items)) {
        loopOverObject(item.items);
      }
    });
  };

  loopOverObject(clonedTemplate);

  return clonedTemplate;
};

export default addUUIDToTemplate;
