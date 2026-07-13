import React, { useContext, useState, act } from "react";
import { render, screen } from "@testing-library/react";
import { regularUser } from "../utils/constants";
import AuthContextProvider from "../contexts/Auth/AuthContextProvider";
import AuthContext from "../contexts/Auth";

const mockGetItem = jest.fn();
const mockSetItem = jest.fn();
const mockRemoveItem = jest.fn();
Object.defineProperty(window, "sessionStorage", {
  writable: true,
  value: {
    getItem: mockGetItem,
    setItem: mockSetItem,
    removeItem: mockRemoveItem,
  },
});

const TestingComponent = () => {
  const { isLoggedIn, loginUser, getUser, logoutUser } =
    useContext(AuthContext);
  const [user, setUser] = useState({});
  return (
    <>
      <button onClick={() => loginUser(regularUser)}>Login User</button>
      <button onClick={() => logoutUser()}>Logout User</button>
      <button onClick={() => setUser(getUser())}>Get User</button>
      <p data-testid="loggedIn">Is User Logged In: {String(isLoggedIn)}</p>
      <div data-testid="user">User: {user.email}</div>
    </>
  );
};


it(`Given I am not logged in,
    When I launch the app,
    I should not be loggedIn initially`, async () => {
  await act(async () =>
    render(
      <AuthContextProvider>
        <TestingComponent />
      </AuthContextProvider>
    )
  );

  let loggedIn = screen.getByTestId("loggedIn");
  expect(loggedIn).toHaveTextContent("Is User Logged In: false");
});

test(`Given I am not logged in,
    When I login,
    Then isLoggedIn should be set to true and 
    if I then log out, isLoggedIn should be false`, async () => {
  await act(async () =>
    render(
      <AuthContextProvider>
        <TestingComponent />
      </AuthContextProvider>
    )
  );

  let loginButton = screen.getByText("Login User");
  await act(async () => {
    loginButton.click();
  });

  let loggedIn = screen.getByTestId("loggedIn");
  expect(loggedIn).toHaveTextContent("Is User Logged In: true");

  let logoutButton = screen.getByText("Logout User");
  await act(async () => {
    logoutButton.click();
  });

  loggedIn = screen.getByTestId("loggedIn");
  expect(loggedIn).toHaveTextContent("Is User Logged In: false");
});


test(`Given I am already logged in,
      When I refresh the page,
        Then I should still be logged in`, async () => {
    mockGetItem.mockReturnValue(regularUser);
    await act(async () =>
      render(
        <AuthContextProvider>
          <TestingComponent />
        </AuthContextProvider>
      )
    );

    const getUserButton = screen.getByText("Get User");
    await act(async () => {
      getUserButton.click();
    });
    const user = screen.getByTestId("user");
    const loggedIn = screen.getByTestId("loggedIn");
    expect(user).toHaveTextContent(`User: ${regularUser.email}`);
    expect(loggedIn).toHaveTextContent("Is User Logged In: true");

});

