import React from "react";
import formConfig from "./data/form-config";
import FormBuilder from "./components/modules/form-builder/FormBuilder";

function App() {
  return (
    <div className="formbuilder-container">
      <FormBuilder form={formConfig.form} template={formConfig.template} />
    </div>
  );
}

export default App;
