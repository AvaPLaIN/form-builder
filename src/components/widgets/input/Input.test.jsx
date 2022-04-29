import { render, screen } from "@testing-library/react";
import React from "react";
import FormbuilderWrapper from "../../../tests/context";

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
  return <FormbuilderWrapper config={config} />;
};

describe("renders Input", () => {
  test("renders Input Component", () => {
    render(<ContextInputComponent config={inputConfig} />);
    expect(screen.getByText("input-label")).toBeInTheDocument();
  });
});
