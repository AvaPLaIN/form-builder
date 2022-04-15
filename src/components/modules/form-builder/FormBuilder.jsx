import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import Controller from "../../widgets/controller";
import { FormBuilderContainer } from "./FormBuilder.styles";
import FormStateContext from "../../../context/formState";
import get from "lodash/get";
import set from "lodash/set";
import unset from "lodash/unset";
import compact from "lodash/compact";
import cloneDeep from "lodash/cloneDeep";
import addUUIDToTemplate from "../../../utils/addUUIDToTemplate";

//TODO - check if useCallback is needed

const FormBuilder = ({ form, template }) => {
  const [items, setItems] = useState(form);

  const methods = useForm();

  const onSubmit = (data) => console.log("form: ", data);

  const handleUpdateControl = (pathId, value) => {
    const newItems = cloneDeep(items);

    //* convert pathId to valid path for Objects
    const controlObjectPathId = pathId.replace(/\d+/g, "items.$&");

    //* get the control object
    const currControlObject = get(newItems, controlObjectPathId);

    //* update items with new value
    set(newItems, controlObjectPathId, { ...currControlObject, value });

    //* set the new form state
    setItems(newItems);
  };

  const handleAddListSectionToList = (pathId) => {
    //* clone the current form
    const currForm = cloneDeep(items);

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
    setItems(enhancedListSection);
  };

  //TODO - adjust with pathIdInfo
  const handleDeleteListSectionFromList = (pathId, pathIdInfo) => {
    //* clone the current form
    const currForm = cloneDeep(items);

    //* convert pathIds to valid path for Objects
    const controlObjectPathId = pathId.replace(/\d+/g, "items.$&");
    const controlObjectPathIdInfo = `${pathIdInfo.replace(
      /\d+/g,
      "items.$&"
    )}.items`;

    //* unset object with path from form
    unset(currForm, controlObjectPathId);

    //* get compact object of form
    const enhancedCurrForm = set(
      currForm,
      controlObjectPathIdInfo,
      compact(get(currForm, controlObjectPathIdInfo))
    );

    //* set the new form state
    setItems(enhancedCurrForm);
  };

  //TODO - swap the order of two list sections
  const handleMoveListSectionDown = (pathId, index) => {
    console.log(pathId, index);

    //TODO check if index is last element -> return

    //TODO get current list section from form

    //TODO get element at index - 1 from form

    //TODO swap the elements

    //TODO set the new form state
  };

  return (
    <FormStateContext.Provider
      value={{
        handleUpdateControl,
        handleAddListSectionToList,
        handleDeleteListSectionFromList,
        handleMoveListSectionDown,
      }}
    >
      <FormProvider {...methods}>
        <FormBuilderContainer>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="formbuilder"
          >
            {Object.values(items)?.map((item) => (
              <Controller key={item.uuid} item={item} />
            ))}
            <button type="submit">Submit</button>
          </form>
        </FormBuilderContainer>
      </FormProvider>
    </FormStateContext.Provider>
  );
};

export default FormBuilder;
