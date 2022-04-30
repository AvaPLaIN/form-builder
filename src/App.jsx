import FormBuilder from "./components/modules/form-builder/FormBuilder";
import formConfig from "./data/form-config";

function App() {
  return (
    <div className="formbuilder-container">
      <FormBuilder form={formConfig.form} template={formConfig.template} />
    </div>
  );
}

export default App;
