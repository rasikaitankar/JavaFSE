import React, {act} from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import Developer from "../models/Developer";
import * as devAPI from "../apiCalls/devAPI";
import EditDeveloper from "../components/EditDeveloper";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const mockNavigate = jest.fn();
jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useParams: () => ({ id: "2" }),
  useNavigate: () => mockNavigate,
}));

let fakeDevs = [
  new Developer("1", "Jason", "Monroe", "JavaScript", 1999),
  new Developer("2", "Steve", "Wozniac", "Objective C", 1970),
];

const store = configureStore({
  reducer: {
    devBios: createSlice({
      name: "devBios",
      initialState: { developers: fakeDevs },
    }).reducer,
  },
});

let updatedDev = new Developer("2", "Steve", "Wozniac", "Assembler", "1968");

it(`should display the developer to be edited in the text fields after mounting`, async () => {
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => fakeDevs,
    })
  );

  render(
    <Provider store={store}>
      <Router>
        <EditDeveloper />
      </Router>
    </Provider>
  );

  const firstNameTextbox = screen.getByTestId("firstName");
  const lastNameTextbox = screen.getByTestId("lastName");
  const favoriteLanguageTextbox = screen.getByTestId("favoriteLanguage");
  const yearStartedTextbox = screen.getByTestId("yearStarted");

  expect(firstNameTextbox.getAttribute("value")).toBe("Steve");
  expect(lastNameTextbox.getAttribute("value")).toBe("Wozniac");
  expect(favoriteLanguageTextbox.getAttribute("value")).toBe("Objective C");
  expect(yearStartedTextbox.getAttribute("value")).toBe("1970");
});

it(`should make PUT request after form submission with correct data`, async () => {
  const putSpy = jest
    .spyOn(devAPI, "putDeveloper")
    .mockResolvedValue(updatedDev);

  render(
    <Provider store={store}>
      <Router>
        <EditDeveloper />
      </Router>
    </Provider>
  );

  const firstNameTextbox = screen.getByTestId("firstName");
  const lastNameTextbox = screen.getByTestId("lastName");
  const favoriteLanguageTextbox = screen.getByTestId("favoriteLanguage");
  const yearStartedTextbox = screen.getByTestId("yearStarted");
  const submitButton = screen.getByText("Submit");

  fireEvent.change(firstNameTextbox, {
    target: { value: updatedDev.firstName },
  });
  fireEvent.change(lastNameTextbox, { target: { value: updatedDev.lastName } });
  fireEvent.change(favoriteLanguageTextbox, {
    target: { value: updatedDev.favoriteLanguage },
  });
  fireEvent.change(yearStartedTextbox, {
    target: { value: updatedDev.yearStarted },
  });
  await act(async () => {
    fireEvent.click(submitButton);
  });

  expect(putSpy).toHaveBeenCalledWith(updatedDev);
  //return waitFor(() =>
  expect(mockNavigate).toHaveBeenCalledWith("/developers");
  //);
});

it(`should log any errors if putDeveloper fetch fails`, async () => {
  const putSpy = jest
    .spyOn(devAPI, "putDeveloper")
    .mockRejectedValue("400 Bad Request");
  const consoleSpy = jest.spyOn(console, "log");

  render(
    <Provider store={store}>
      <Router>
        <EditDeveloper />
      </Router>
    </Provider>
  );

  const firstNameTextbox = screen.getByTestId("firstName");
  const lastNameTextbox = screen.getByTestId("lastName");
  const favoriteLanguageTextbox = screen.getByTestId("favoriteLanguage");
  const yearStartedTextbox = screen.getByTestId("yearStarted");
  const submitButton = screen.getByText("Submit");

  fireEvent.change(firstNameTextbox, {
    target: { value: updatedDev.firstName },
  });
  fireEvent.change(lastNameTextbox, { target: { value: updatedDev.lastName } });
  fireEvent.change(favoriteLanguageTextbox, {
    target: { value: updatedDev.favoriteLanguage },
  });
  fireEvent.change(yearStartedTextbox, {
    target: { value: updatedDev.yearStarted },
  });
  await act(async () => {
    fireEvent.click(submitButton);
  });
  expect(putSpy).toHaveBeenCalledWith(updatedDev);
  //return waitFor(() =>
  expect(consoleSpy).toHaveBeenCalledWith("400 Bad Request");
  //);
});
