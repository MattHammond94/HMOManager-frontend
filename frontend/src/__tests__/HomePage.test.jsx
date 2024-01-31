import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import HomePage from "../pages/HomePage";

describe("Not Found Page", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
  });

  it('Should display the app name as a title', () => {
    screen.debug()
    expect(screen.getByTestId("homepageTitle")).toHaveTextContent("HMO Manager")
  });

  it('Should showcase the login form component', () => {
    const loginForm = screen.getByTestId("loginForm");
    expect(loginForm).toBeInTheDocument();
  });

  it('Should showcase an icon/logo', () => {
    expect(screen.getByTestId("buildingIcon")).toBeVisible
  });
});