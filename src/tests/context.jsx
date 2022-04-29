import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import FormStateContext from "../context/formState";

const handleUpdateControl = jest.fn();

const ContextWrapper = ({ children }) => {
  const methods = useForm();

  return (
    <FormStateContext.Provider value={{ handleUpdateControl }}>
      <FormProvider {...methods}>{children}</FormProvider>
    </FormStateContext.Provider>
  );
};

export default ContextWrapper;
