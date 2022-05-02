import { action } from "@storybook/addon-actions";
import { FormProvider, useForm } from "react-hook-form";
import FormStateContext from "../../src/context/formState";

const FormBuilderDecorator = (Story) => {
  const methods = useForm();

  const handleUpdateControl = (path, value) => {
    action("Update Control")(path, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValues = methods.getValues();
    action("Submit Form")(formValues);
  };

  return (
    <FormStateContext.Provider value={{ handleUpdateControl }}>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit}
          className="formbuilder"
          data-testid="form"
        >
          <Story />
          <button type="submit">Submit</button>
        </form>
      </FormProvider>
    </FormStateContext.Provider>
  );
};

export default FormBuilderDecorator;
