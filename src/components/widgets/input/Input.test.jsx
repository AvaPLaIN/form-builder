import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useMemo } from "react";
import { FormProvider, useForm } from "react-hook-form";
import FormStateContext from "../../../context/formState";
import Input from "./Input";

//* input Configuration
const inputConfig = {
  form: {
    inputId: {
      id: "inputId",
      control: "input",
      type: "text",
      label: {
        text: "input-label",
        visible: true,
      },
      placeholder: "input-placeholder",
      value: "input-value",
      rules: {
        required: {
          value: true,
          message: "Input is required",
        },
      },
      uuid: "619ahcu8-hz6d-9h1t-a681-ad93b9426b42",
    },
  },
};

const handleUpdateControl = jest.fn();
const onSubmit = jest.fn();

const ContextInputComponent = () => {
  const methods = useForm();

  const FormStateContextValue = useMemo(
    () => ({
      handleUpdateControl,
    }),
    []
  );

  return (
    <FormStateContext.Provider value={FormStateContextValue}>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="formbuilder"
          data-testid="form"
        >
          <Input {...inputConfig.form.inputId} />
          <button type="submit">Submit</button>
        </form>
      </FormProvider>
    </FormStateContext.Provider>
  );
};

describe("Input Context Mock", () => {
  test("renders form", () => {
    render(<ContextInputComponent />);

    expect(screen.getByTestId("form")).toBeInTheDocument();
  });

  test("renders submit button", () => {
    render(<ContextInputComponent />);

    expect(screen.getByRole("button")).toHaveTextContent("Submit");
  });

  test("submit form", async () => {
    render(<ContextInputComponent />);

    const submitButton = screen.getByRole("button");

    await userEvent.click(submitButton);

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});

describe("Input", () => {
  test("renders Input Component", () => {
    render(<ContextInputComponent />);

    expect(screen.getByTestId("input")).toBeInTheDocument();
  });

  test("renders Input Label", () => {
    render(<ContextInputComponent />);

    expect(screen.getByText("input-label")).toBeInTheDocument();
  });

  test("renders Input Placeholder", () => {
    render(<ContextInputComponent />);

    expect(
      screen.getByPlaceholderText("input-placeholder")
    ).toBeInTheDocument();
  });

  xtest("renders Input Value", () => {
    render(<ContextInputComponent />);

    expect(screen.getByRole("textbox")).toHaveValue("input-value");
  });

  xtest("clear input value", async () => {
    render(<ContextInputComponent />);

    const input = screen.getByRole("textbox");

    await userEvent.clear(input);

    expect(input).toHaveValue("");
    expect(handleUpdateControl).toHaveBeenCalledTimes(1);
  });

  xtest("change input value", async () => {
    render(<ContextInputComponent />);

    const input = screen.getByRole("textbox");

    await userEvent.clear(input);
    await userEvent.type(input, "new-value");

    expect(input).toHaveValue("new-value");
    expect(handleUpdateControl).toHaveBeenCalledTimes(10);
  });

  xtest("should display error message when submitting empty input with required rule", async () => {
    render(<ContextInputComponent />);

    const input = screen.getByRole("textbox");
    const submitButton = screen.getByRole("button");

    await userEvent.clear(input);
    await userEvent.click(submitButton);

    expect(input).toHaveValue("");
    expect(onSubmit).toHaveBeenCalledTimes(0);
    // TODO - check for error message on input (bug)
  });

  xtest("change input with correct pathId", async () => {
    render(<ContextInputComponent />);

    const input = screen.getByRole("textbox");

    await userEvent.clear(input);

    expect(handleUpdateControl).toHaveBeenCalledWith("inputId", "");
  });

  test("should have savePathId as id", () => {
    render(<ContextInputComponent />);

    const input = screen.getByRole("textbox");

    expect(input.getAttribute("id")).toBe("inputId");
  });
});
