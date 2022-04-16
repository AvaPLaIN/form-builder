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
  const [data, setData] = useState({});

  const methods = useForm();

  const onSubmit = (data) => setData(data);

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

  const handleMoveListSectionDown = (pathId, index) => {
    //* clone the current form
    const newItems = cloneDeep(items);

    //* convert pathId to valid path for Objectss
    const controlObjectPathId = `${pathId.replace(/\d+/g, "items.$&")}.items`;

    const currListObject = get(newItems, controlObjectPathId);
    const currListObjectLength = currListObject.length;

    //* return if list section is already last section
    if (currListObjectLength === index + 1) return;

    //* swap the two list sections
    const temp = currListObject[index];
    currListObject[index] = currListObject[index + 1];
    currListObject[index + 1] = temp;

    //* merge the new list section to the form
    const enhancedListSection = set(
      newItems,
      controlObjectPathId,
      currListObject
    );

    //* set the new form state
    setItems(enhancedListSection);
  };

  const handleMoveListSectionUp = (pathId, index) => {
    //* clone the current form
    const newItems = cloneDeep(items);

    //* return if list section is already last section
    if (index === 0) return;

    //* convert pathId to valid path for Objectss
    const controlObjectPathId = `${pathId.replace(/\d+/g, "items.$&")}.items`;

    //* get current list
    const currListObject = get(newItems, controlObjectPathId);

    //* swap the two list sections
    const temp = currListObject[index];
    currListObject[index] = currListObject[index - 1];
    currListObject[index - 1] = temp;

    //* merge the new list section to the form
    const enhancedListSection = set(
      newItems,
      controlObjectPathId,
      currListObject
    );

    //* set the new form state
    setItems(enhancedListSection);
  };

  return (
    <FormStateContext.Provider
      value={{
        handleUpdateControl,
        handleAddListSectionToList,
        handleDeleteListSectionFromList,
        handleMoveListSectionDown,
        handleMoveListSectionUp,
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
        <pre>{JSON.stringify(data, undefined, 2)}</pre>
      </FormProvider>
    </FormStateContext.Provider>
  );
};

export default FormBuilder;
