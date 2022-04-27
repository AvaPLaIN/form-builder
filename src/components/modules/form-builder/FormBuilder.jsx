import cloneDeep from "lodash/cloneDeep";
import compact from "lodash/compact";
import get from "lodash/get";
import set from "lodash/set";
import unset from "lodash/unset";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import FormStateContext from "../../../context/formState";
import addUUIDToTemplate from "../../../utils/addUUIDToTemplate";
import Controller from "../../widgets/controller";
import { FormBuilderContainer, StateContainer } from "./FormBuilder.styles";

const FormBuilder = ({ form, template }) => {
  const [items, setItems] = useState(form);
  const [data, setData] = useState({});

  const methods = useForm();

  const onSubmit = (data) => setData(data);

  const handleUpdateControl = (pathId, value) => {
    const newItems = cloneDeep(items);

    //* get the control object
    const currControlObject = get(newItems, pathId);

    //* update items with new value
    set(newItems, pathId, { ...currControlObject, value });

    //* set the new form state
    setItems(newItems);
  };

  const handleAddListSectionToList = (pathId) => {
    //* clone the current form
    const currForm = cloneDeep(items);

    //* convert pathId to template pathId
    const controlTemplatePathId = `${pathId.replace(/\d+/g, "0")}.items.0`;

    //* get the current template object
    const currTemplate = cloneDeep(get(template, controlTemplatePathId));

    //* add uuid key to current template object controls
    const clonedCurrTemplate = addUUIDToTemplate(currTemplate);

    //* get the current list section from form
    const currentListSection = get(currForm, `${pathId}.items`);

    //* add template to the list section
    currentListSection.push(clonedCurrTemplate);

    //* merge the new list section to the form
    const enhancedListSection = set(
      currForm,
      `${pathId}.items`,
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

    //* convert pathId to valid path for Objects
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
        // handleClearForm,
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
            {/* <button type="button" onClick={handleClearForm}>
              Clear
            </button> */}
          </form>
        </FormBuilderContainer>
        <StateContainer>
          <div className="config">
            <h3>Form Config</h3>
            <pre>{JSON.stringify(items, undefined, 2)}</pre>
          </div>
          <div className="state">
            <h3>Form State</h3>
            <pre>{JSON.stringify(data, undefined, 2)}</pre>
          </div>
        </StateContainer>
      </FormProvider>
    </FormStateContext.Provider>
  );
};

export default FormBuilder;
