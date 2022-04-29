import { render, screen } from "@testing-library/react";
import React from "react";
import ContextWrapper from "../../../tests/context";
import Input from "./Input";

const inputConfig = {
  id: "input-id",
  label: "input-label",
  type: "text",
  value: "input-value",
  rules: {
    required: {
      value: true,
      message: "Gender is required",
    },
  },
  savePathId: "input-save-path-id",
  objectPathId: "input-object-path-id",
};

const ContextComponent = ({ config }) => {
  return (
    <ContextWrapper>
      <Input {...config} />
    </ContextWrapper>
  );
};

describe("renders Input", () => {
  test("renders Input Component", () => {
    render(<ContextComponent config={inputConfig} />);
    expect(screen.getByText("input-label")).toBeInTheDocument();
  });
});
