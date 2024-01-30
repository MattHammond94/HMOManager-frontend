import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import HomePage from "../pages/HomePage";

describe("Not Found Page", () => {
  beforeEach(() => {
    render(<HomePage />);
  });

  it('Should display the app name as a title', () => {
    screen.debug()
    expect(screen.getByTestId("")).toHaveTextContent("")
  });

  // it('Should showcase the login form component', () => {
  //   expect(screen.getByTestId("")).toHaveTextContent("")
  // });

  // should showcase an icon 
  
});