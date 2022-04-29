import { render, screen } from "@testing-library/react";
import React from "react";
import FormBuilder from "../../modules/form-builder/FormBuilder";

//* input Configuration
const inputConfig = {
  form: {
    inputId: {
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
    },
  },
};

const ContextInputComponent = ({ config }) => {
  return <FormBuilder form={config?.form} template={config?.template} />;
};

describe("Input", () => {
  test("renders Input Component", () => {
    render(<ContextInputComponent config={inputConfig} />);
    expect(screen.getByTestId("input")).toBeInTheDocument();
  });

  test("renders Input Label", () => {
    render(<ContextInputComponent config={inputConfig} />);
    expect(screen.getByText("input-label")).toBeInTheDocument();
  });

  test("renders Input Value", () => {
    render(<ContextInputComponent config={inputConfig} />);
    expect(screen.getByRole("textbox")).toHaveValue("input-value");
  });

  // test("renders Input Error", () => {
  //   render(<ContextInputComponent config={inputConfig} />);

  //   //click on submit button
  //   const submitButton = screen.getByRole("button", { name: "Submit" });
  //   userEvent.click(submitButton);
  //   expect(screen.getByText("Input is required")).toBeInTheDocument();
  // });
});
