import FormBuilderDecorator from "../../../../.storybook/decorators/FormBuilder.decorator";
import Input from "./Input";

export default {
  title: "Input",
  component: Input,
  decorators: [FormBuilderDecorator],
  argTypes: {
    uuid: {
      control: "text",
    },
    id: {
      control: "text",
    },
    label: {
      control: "text",
    },
    control: {
      table: {
        disable: true,
      },
    },
    type: {
      control: "select",
      options: [
        "text",
        "email",
        "password",
        "number",
        "tel",
        "url",
        "date",
        "datetime-local",
        "time",
        "month",
        "week",
        "file",
      ],
    },
    value: {
      control: "text",
    },
    rules: {
      control: "object",
    },
  },
};

const Template = (args) => <Input {...args} />;

export const Test = Template.bind({});

Test.args = {
  uuid: "619ahcu8-hz6d-9h1t-a681-ad93b9426b42",
  id: "inputId",
  label: "input-label",
  control: "input",
  type: "text",
  value: "input-value",
  rules: {
    required: {
      value: true,
      message: "Input is required",
    },
  },
};
