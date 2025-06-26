import { render, screen, fireEvent } from "@testing-library/react";
import Blog from "./Blog";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

describe("Blog Component", () => {
  const blogData = {
    title: "Test Blog Title",
    details: "Some details about the blog",
    type: "Technology",
  };

  const mockSelectBlog = jest.fn();

  const renderComponent = (selectedBlog = false, themeMode = "light") => {
    const store = mockStore({
      slice: {
        themeMode,
      },
    });

    return render(
      <Provider store={store}>
        <ul>
          <Blog
            data={blogData}
            index={1}
            selectedBlog={selectedBlog}
            selectBlog={mockSelectBlog}
          />
        </ul>
      </Provider>
    );
  };

  test("renders blog title, details and type", () => {
    renderComponent();
    expect(screen.getByText("Test Blog Title")).toBeInTheDocument();
    expect(screen.getByText("Some details about the blog")).toBeInTheDocument();
    expect(screen.getByText("Technology")).toBeInTheDocument();
  });

  test("applies selected class if selectedBlog is true", () => {
    const { container } = renderComponent(true);
    expect(container.querySelector(".selected-light")).toBeInTheDocument();
  });

  test("calls selectBlog on click", () => {
    renderComponent();
    fireEvent.click(screen.getByText("Test Blog Title"));
    expect(mockSelectBlog).toHaveBeenCalledWith(1);
  });

  test("matches snapshot (light mode)", () => {
    const { asFragment } = renderComponent();
    expect(asFragment()).toMatchSnapshot();
  });

  test("matches snapshot (dark mode)", () => {
    const { asFragment } = renderComponent(false, "dark");
    expect(asFragment()).toMatchSnapshot();
  });
});
