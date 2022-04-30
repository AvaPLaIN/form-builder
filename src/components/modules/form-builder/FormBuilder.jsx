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

  const handleUpdateControl = (currObjectPathId, value) => {
    const newItems = cloneDeep(items);

    //* get the control object
    const currControlObject = get(newItems, currObjectPathId);

    //* update items with new value
    set(newItems, currObjectPathId, { ...currControlObject, value });

    //* set the new form state
    setItems(newItems);
  };

  const handleAddListSectionToList = (currObjectPathId) => {
    const currForm = cloneDeep(items);
    const controlTemplatePathId = `${currObjectPathId.replace(
      /\d+/g,
      "0"
    )}.items.0`;

    //* get the current template object
    const currTemplate = cloneDeep(get(template, controlTemplatePathId));

    //* add uuid key to current template object controls
    const clonedCurrTemplate = addUUIDToTemplate(currTemplate);

    //* get the current list section from form
    const currentListSection = get(currForm, `${currObjectPathId}.items`);

    //* add template to the list section
    currentListSection.push(clonedCurrTemplate);

    //* merge the new list section to the form
    const enhancedListSection = set(
      currForm,
      `${currObjectPathId}.items`,
      currentListSection
    );

    //* set the new form state
    setItems(enhancedListSection);
  };

  const handleDeleteListSectionFromList = (
    currObjectPathId,
    currListSectionPathId
  ) => {
    const currForm = cloneDeep(items);
    const listSectionItemsPathId = `${currListSectionPathId}.items`;

    //* unset object with path from form
    unset(currForm, currObjectPathId);

    //* get compact object of form
    const enhancedCurrForm = set(
      currForm,
      listSectionItemsPathId,
      compact(get(currForm, listSectionItemsPathId))
    );

    //* set the new form state
    setItems(enhancedCurrForm);
  };

  const handleMoveListSectionDown = (currListSectionPathId, index) => {
    const newItems = cloneDeep(items);
    const listSectionItemsPathId = `${currListSectionPathId}.items`;

    const currListObject = get(newItems, listSectionItemsPathId);
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
      listSectionItemsPathId,
      currListObject
    );

    //* set the new form state
    setItems(enhancedListSection);
  };

  const handleMoveListSectionUp = (currListSectionPathId, index) => {
    const newItems = cloneDeep(items);

    //* return if list section is already last section
    if (index === 0) return;

    //* convert pathId to valid path for Objects
    const listSectionItemsPathId = `${currListSectionPathId}.items`;

    //* get current list
    const currListObject = get(newItems, listSectionItemsPathId);

    //* swap the two list sections
    const temp = currListObject[index];
    currListObject[index] = currListObject[index - 1];
    currListObject[index - 1] = temp;

    //* merge the new list section to the form
    const enhancedListSection = set(
      newItems,
      listSectionItemsPathId,
      currListObject
    );

    //* set the new form state
    setItems(enhancedListSection);
  };

  return (
    <FormStateContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
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
