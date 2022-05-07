import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App/App";

describe("Location filter tests", () => {
  test("renders the basic component with Location as the title", () => {
    render(<App />);
    const locationTitle = screen.getByText(/Location/i);
    expect(locationTitle).toBeInTheDocument();
  });

  test("tests for selection and clearing of textboxes", async () => {
    render(<App />);
    const checkboxes = screen.getAllByRole("checkbox");
    const checkboxToBeSelected = checkboxes[0];
    fireEvent.click(checkboxToBeSelected);
    expect((await screen.findAllByRole("checkbox"))[0]).toBeChecked();
    fireEvent.click(screen.getByText("ClearAll"));
    const updatedCheckbox = (await screen.findAllByRole("checkbox"))[0];
    expect(updatedCheckbox).not.toBeChecked();
  });
});
