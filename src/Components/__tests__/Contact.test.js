import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";
import { describe } from "node:test";

//It and test they both are same thing  in place of test you can write it as well
describe("Contact Componet Test case", () => {
  test("Should render contact us componenet", () => {
    //render
    render(<Contact />);
    //Querying
    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should check if button is present in the contact componet", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  test("Should load input name inside contact componet", () => {
    render(<Contact />);

    const name = screen.getByPlaceholderText("name");
    expect(name).toBeInTheDocument();
  });

  test("Should load 2 input boxes on the contact componet", () => {
    render(<Contact />);
    //Querying
    const inputBox = screen.getAllByRole("textbox");
    expect(inputBox.length).toBe(2);
  });

  it("Should load 2 input boxes on the contact componet withnotbe condition", () => {
    render(<Contact />);
    const inputBox = screen.getAllByRole("textbox");
    expect(inputBox.length).not.toBe(3);
  });
});
