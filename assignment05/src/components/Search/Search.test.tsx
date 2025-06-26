import { render, screen, fireEvent } from "@testing-library/react";
import Search from "./Search";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { SliceActions } from "../../store/sliceStore";

// Mock child components
jest.mock("../Input/Input", () => (props: any) => (
  <input {...props} data-testid="search-input" />
));
jest.mock("../button/Button", () => (props: any) => (
  <button onClick={props.handleOnClick}>{props.text}</button>
));
jest.mock(
  "../../containers/newBlogContainer/NewBlogContainer",
  () => (props: any) =>
    (
      <div data-testid="modal">
        NewBlogContainer<button onClick={props.close}>Close</button>
      </div>
    )
);

const mockStore = configureStore([]);

describe("Search Component", () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      slice: {
        themeMode: "light",
      },
    });
    store.dispatch = jest.fn();
  });

  test("renders input and button", () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );

    expect(screen.getByTestId("search-input")).toBeInTheDocument();
    expect(screen.getByText("New")).toBeInTheDocument();
  });

  test("dispatches filterBlogs on input change", () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );

    const input = screen.getByTestId("search-input");
    fireEvent.change(input, { target: { value: "React" } });

    expect(store.dispatch).toHaveBeenCalledWith(
      SliceActions.filterBlogs("React")
    );
  });

  test("opens and closes the NewBlog modal", () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );

    // Open modal
    fireEvent.click(screen.getByText("New"));
    expect(screen.getByTestId("modal")).toBeInTheDocument();

    // Close modal
    fireEvent.click(screen.getByText("Close"));
    expect(screen.queryByTestId("modal")).not.toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
