import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./Input";

describe("Input Component", () => {
  const defaultProps = {
    type: "text",
    placeholder: "Enter your name",
    value: "John Doe",
    onChange: jest.fn(),
  };

  beforeEach(() => {
    defaultProps.onChange.mockClear();
  });

  test("renders with correct type and value", () => {
    render(<Input {...defaultProps} />);
    const input = screen.getByPlaceholderText(
      "Enter your name"
    ) as HTMLInputElement;

    expect(input).toBeInTheDocument();
    expect(input.type).toBe("text");
    expect(input.value).toBe("John Doe");
  });

  test("renders with default class if no class is passed", () => {
    render(<Input {...defaultProps} />);
    const input = screen.getByPlaceholderText("Enter your name");
    expect(input).toHaveClass("default");
  });

  test("applies custom classes if provided", () => {
    render(<Input {...defaultProps} classes="input-lg" />);
    const input = screen.getByPlaceholderText("Enter your name");
    expect(input).toHaveClass("input-lg");
  });

  test("calls onChange when value changes", () => {
    render(<Input {...defaultProps} />);
    const input = screen.getByPlaceholderText("Enter your name");
    fireEvent.change(input, { target: { value: "Jane" } });
    expect(defaultProps.onChange).toHaveBeenCalledTimes(1);
  });

  test("is disabled when disable=true", () => {
    render(<Input {...defaultProps} disable />);
    const input = screen.getByPlaceholderText("Enter your name");
    expect(input).toBeDisabled();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<Input {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
