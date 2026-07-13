import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Login from "../components/Login";
import { regularUser } from "../utils/constants";
import AuthContext from "../contexts/Auth";

const mockNavigate = jest.fn();
jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useNavigate: () => mockNavigate,
}));

const mockLoginUser = jest.fn();
let fakeContext;

beforeEach(() => {
  fakeContext = {
    isLoggedIn: false,
    loginUser: mockLoginUser,
  };
});

it(`Given a user is not logged in, 
    when the user submits a valid username and password, 
    then the user should be redirected to the home page`, () => {
  //Arrange
  render(
    <Router>
      <AuthContext.Provider value={fakeContext}>
        <Login />
      </AuthContext.Provider>
    </Router>
  );

  const emailTextBox = screen.getByTestId("email");
  const passwordTextBox = screen.getByTestId("password");
  const loginButton = screen.getByText("Login");

  //Act - Login
  fireEvent.change(emailTextBox, { target: { value: regularUser.email } });
  fireEvent.change(passwordTextBox, {
    target: { value: regularUser.password },
  });

  fireEvent.click(loginButton);

  //Assert
  expect(mockLoginUser).toHaveBeenCalledWith(JSON.stringify(regularUser));
  expect(mockNavigate).toHaveBeenCalledWith("/");
});
