import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import LogInForm from "../components/LogInForm";

describe("LogInForm", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        < LogInForm />
      </MemoryRouter>
    );
  });

  it('Should display two input fields', () => {
    const usernameInput = screen.getByTestId("username-input");
    const passwordInput = screen.getByTestId("password-input");
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  // it('Should initially not display any error messages', () => {
  
  // });

  // it('Should display the appropriate error message when ', () => {
    
  // });

  // tests for the remaining content
  
  // expect(loginForm).toHaveTextContent("Login");

  // test to ensure a req is sent 

  // test to ensure useNavigate is called if res is returned

  // Test to ensure button is disabled on submit
});