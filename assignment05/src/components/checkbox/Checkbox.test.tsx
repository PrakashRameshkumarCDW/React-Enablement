import { render, screen, fireEvent } from "@testing-library/react";
import Checkbox from "./Checkbox";

describe("Checkbox Component", () => {
  const mockOnChange = jest.fn();

  const defaultProps = {
    label: "Accept Terms",
    checked: false,
    onChange: mockOnChange,
  };

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  test("renders checkbox with label", () => {
    render(<Checkbox {...defaultProps} />);
    expect(screen.getByText("Accept Terms")).toBeInTheDocument();

    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
    expect(checkbox.checked).toBe(false);
  });

  test("renders checked state correctly", () => {
    render(<Checkbox {...defaultProps} checked={true} />);
    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
    expect(checkbox.checked).toBe(true);
  });

  test("calls onChange with correct value when clicked", () => {
    render(<Checkbox {...defaultProps} />);
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(mockOnChange).toHaveBeenCalledWith(true);
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<Checkbox {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
