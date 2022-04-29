import React from "react";
import FormBuilder from "../components/modules/form-builder/FormBuilder";

const FormbuilderWrapper = ({ config }) => {
  const { form, template } = config;

  return <FormBuilder form={form} template={template} />;
};

export default FormbuilderWrapper;
