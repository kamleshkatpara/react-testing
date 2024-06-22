import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";
import InputCounter from "./InputCounter";

describe("Counter", () => {
  test("renders correclty", () => {
    render(<Counter />);

    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    expect(incrementButton).toBeInTheDocument();
  });

  test("should render a count of 0", () => {
    render(<Counter />);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  test("should render a count of 1 after clicking the button", () => {
    render(<Counter />);

    const incrementButton = screen.getByRole("button", { name: "Increment" });

    userEvent.click(incrementButton);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  test("should render a count of 10 after clicking the set button", () => {
    render(<InputCounter />);

    const amountInput = screen.getByRole("spinbutton");
    userEvent.type(amountInput, "10");
    expect(amountInput).toHaveValue(10);

    const setButton = screen.getByRole("button", { name: "Set" });
    userEvent.click(setButton);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("10");
  });
});

test("should render elements focused in the right corner", () => {
  render(<InputCounter />);
  const amountInput = screen.getByRole("spinbutton");
  const setButton = screen.getByRole("button", { name: "Set" });
  const incrementButton = screen.getByRole("button", { name: "Increment" });

  userEvent.tab();
  expect(incrementButton).toHaveFocus();

  userEvent.tab();
  expect(amountInput).toHaveFocus();

  userEvent.tab();
  expect(setButton).toHaveFocus();
});
