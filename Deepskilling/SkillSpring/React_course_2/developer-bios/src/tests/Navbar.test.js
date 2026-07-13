import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import AuthContext from "../contexts/Auth";
import { DEVELOPER_BIOS_ROUTE, HOME_ROUTE, LOGIN_ROUTE, SEARCH_DEVELOPERS_ROUTE } from "../utils/constants";


it("Has link for Home that has correct href prop", () => {
  render(
    <AuthContext.Provider value={{isLoggedIn:false}}>
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
    </AuthContext.Provider>
  );
  const homeLink = screen.getByText(/Home/i);
  const biosLink = screen.getByText(/Developer Bios/i);
  const searchLink = screen.getByText(/Search Bios/i);
  const loginLink = screen.getByText(/Login/i);

  expect(homeLink.getAttribute('href')).toBe(HOME_ROUTE);
  expect(biosLink.getAttribute('href')).toBe(DEVELOPER_BIOS_ROUTE);
  expect(searchLink.getAttribute('href')).toBe(SEARCH_DEVELOPERS_ROUTE);
  expect(loginLink.getAttribute('href')).toBe(LOGIN_ROUTE);
});

it(`when a user is logged in, there should be a 
  Logout link that when clicked, 
  should log out a user`, async () => {
    const mockLogoutUser = jest.fn();
    const fakeContext = {
        isLoggedIn: true,
        logoutUser: mockLogoutUser
    }

    render(
      <AuthContext.Provider value={fakeContext}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </AuthContext.Provider>
    );
    
    const logoutLink = screen.getByText(/Logout/);
    fireEvent.click(logoutLink);
    expect(mockLogoutUser).toHaveBeenCalledTimes(1);

});
