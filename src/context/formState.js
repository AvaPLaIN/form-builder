import { useState, createContext } from "react";
import get from "lodash/get";
import set from "lodash/set";
import cloneDeep from "lodash/cloneDeep";
import addUUIDToTemplate from "../utils/addUUIDToTemplate";

const FormStateContext = createContext({});

const FormProvider = ({ children, form, template }) => {
  const [formConfig, setformConfig] = useState(form);

  const handleAddListSectionToList = (pathId) => {
    //* clone the current form
    const currForm = cloneDeep(formConfig);

    //* convert pathIds to valid path for Objects
    const controlObjectPathId = pathId.replace(/\d+/g, "items.$&");
    const controlTemplatePathId = `${controlObjectPathId.replace(
      /\d+/g,
      "0"
    )}.items.0`;

    //* get the current template object
    const currTemplate = cloneDeep(get(template, controlTemplatePathId));

    //* add uuid key to current template object controls
    const clonedCurrTemplate = addUUIDToTemplate(currTemplate);

    //* get the current list section from form
    const currentListSection = get(currForm, `${controlObjectPathId}.items`);

    //* add template to the list section
    currentListSection.push(clonedCurrTemplate);

    //* merge the new list section to the form
    const enhancedListSection = set(
      currForm,
      `${controlObjectPathId}.items`,
      currentListSection
    );

    //* set the new form state
    setformConfig(enhancedListSection);
  };

  return (
    <FormStateContext.Provider
      value={{ formConfig, handleAddListSectionToList }}
    >
      {children}
    </FormStateContext.Provider>
  );
};

export default FormStateContext;
