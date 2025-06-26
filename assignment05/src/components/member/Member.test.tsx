import { render, screen } from "@testing-library/react";
import Members from "./Member";

// Mock the Image component
jest.mock("../../components/imageComponent/Image", () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} />
  ),
}));

describe("Members Component", () => {
  const mockProps = {
    name: "Alice Johnson",
    location: "San Francisco",
    photo: "https://example.com/alice.jpg",
    lightMode: "light",
  };

  test("renders name, location, and photo", () => {
    render(<Members {...mockProps} />);

    expect(screen.getByText("Alice Johnson")).toBeInTheDocument();
    expect(screen.getByText("San Francisco")).toBeInTheDocument();
    const img = screen.getByAltText("Alice Johnson") as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toBe("https://example.com/alice.jpg");
  });

  test("applies light mode classes correctly", () => {
    render(<Members {...mockProps} />);
    expect(screen.getByText("Alice Johnson")).toHaveClass("name-light");
    expect(screen.getByText("San Francisco")).toHaveClass("location-light");
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<Members {...mockProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
