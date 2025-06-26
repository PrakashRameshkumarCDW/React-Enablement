import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button Component", () => {
  const mockClick = jest.fn();

  const defaultProps = {
    text: "Click Me",
    handleOnClick: mockClick,
  };

  beforeEach(() => {
    mockClick.mockClear();
  });

  test("renders with default class and text", () => {
    render(<Button {...defaultProps} />);
    const button = screen.getByText("Click Me");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("default-btn");
  });

  test("applies custom classes if provided", () => {
    render(<Button {...defaultProps} classes="primary" />);
    const button = screen.getByText("Click Me");
    expect(button).toHaveClass("default-btn primary");
  });

  test("disables the button if disable=true", () => {
    render(<Button {...defaultProps} disable />);
    const button = screen.getByText("Click Me") as HTMLButtonElement;
    expect(button.disabled).toBe(true);
  });

  test("calls handleOnClick when clicked", () => {
    render(<Button {...defaultProps} />);
    fireEvent.click(screen.getByText("Click Me"));
    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  test("does not call handleOnClick when disabled", () => {
    render(<Button {...defaultProps} disable />);
    fireEvent.click(screen.getByText("Click Me"));
    expect(mockClick).not.toHaveBeenCalled();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<Button {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
