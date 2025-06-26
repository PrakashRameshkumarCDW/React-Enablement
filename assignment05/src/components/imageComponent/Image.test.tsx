import { render, screen } from "@testing-library/react";
import Image from "./Image";

describe("Image Component", () => {
  const defaultProps = {
    src: "https://example.com/image.jpg",
    alt: "Example Image",
  };

  test("renders image with given src and alt", () => {
    render(<Image {...defaultProps} />);
    const img = screen.getByAltText("Example Image") as HTMLImageElement;

    expect(img).toBeInTheDocument();
    expect(img.src).toBe("https://example.com/image.jpg");
    expect(img.alt).toBe("Example Image");
  });

  test("applies custom classes if provided", () => {
    render(<Image {...defaultProps} classes="custom-img" />);
    const img = screen.getByAltText("Example Image");
    expect(img).toHaveClass("custom-img");
  });

  test("has 100% width and height", () => {
    render(<Image {...defaultProps} />);
    const img = screen.getByAltText("Example Image");
    expect(img).toHaveAttribute("width", "100%");
    expect(img).toHaveAttribute("height", "100%");
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<Image {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
