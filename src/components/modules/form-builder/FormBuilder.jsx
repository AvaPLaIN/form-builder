import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import Controller from "../../widgets/controller";
import { FormBuilderContainer } from "./FormBuilder.styles";
import FormStateContext from "../../../context/formState";
import get from "lodash/get";
import set from "lodash/set";
import cloneDeep from "lodash/cloneDeep";
import addUUIDToTemplate from "../../../utils/addUUIDToTemplate";

const FormBuilder = ({ form, template }) => {
  const [items, setItems] = useState(form);

  const methods = useForm();

  const onSubmit = (data) => console.log("form: ", data);

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

  return (
    <FormStateContext.Provider value={{ handleAddListSectionToList }}>
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
