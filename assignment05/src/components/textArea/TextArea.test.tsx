import { render, screen, fireEvent } from "@testing-library/react";
import TextArea from "./TextArea";

describe("TextArea Component", () => {
  const mockChange = jest.fn();

  const defaultProps = {
    placeHolder: "Enter description",
    classes: "textarea-primary",
    value: "Initial text",
    valueChange: mockChange,
  };

  beforeEach(() => {
    mockChange.mockClear();
  });

  test("renders with correct placeholder and value", () => {
    render(<TextArea {...defaultProps} />);
    const textarea = screen.getByPlaceholderText(
      "Enter description"
    ) as HTMLTextAreaElement;

    expect(textarea).toBeInTheDocument();
    expect(textarea.value).toBe("Initial text");
  });

  test("applies custom class", () => {
    render(<TextArea {...defaultProps} />);
    const textarea = screen.getByPlaceholderText("Enter description");
    expect(textarea).toHaveClass("textarea-primary");
  });

  test("calls valueChange on input", () => {
    render(<TextArea {...defaultProps} />);
    const textarea = screen.getByPlaceholderText("Enter description");

    fireEvent.change(textarea, { target: { value: "Updated text" } });
    expect(mockChange).toHaveBeenCalledTimes(1);
  });

  test("is disabled when disable is true", () => {
    render(<TextArea {...defaultProps} disable />);
    const textarea = screen.getByPlaceholderText("Enter description");
    expect(textarea).toBeDisabled();
  });

  test("renders with specific number of rows if given", () => {
    render(<TextArea {...defaultProps} rows={5} />);
    const textarea = screen.getByPlaceholderText("Enter description");
    expect(textarea).toHaveAttribute("rows", "5");
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<TextArea {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
