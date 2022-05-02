import { action } from "@storybook/addon-actions";
import { useMemo } from "react";
import { FormProvider, useForm } from "react-hook-form";
import FormStateContext from "../../src/context/formState";

const FormBuilderDecorator = (Story, context) => {
  const methods = useForm();

  const handleUpdateControl = (path, value) => {
    action("handleUpdateControl")(path, value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    action("onSubmit")(e);
  };

  const FormStateContextValue = useMemo(
    () => ({
      handleUpdateControl,
    }),
    []
  );

  return (
    <FormStateContext.Provider value={FormStateContextValue}>
      <FormProvider {...methods}>
        <form onSubmit={onSubmit} className="formbuilder" data-testid="form">
          <Story />
          <button type="submit">Submit</button>
        </form>
      </FormProvider>
    </FormStateContext.Provider>
  );
};

export default FormBuilderDecorator;
