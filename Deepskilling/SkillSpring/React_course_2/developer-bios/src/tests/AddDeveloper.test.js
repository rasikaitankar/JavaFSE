import React, { act } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import createSagaMiddleWare from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import devBiosReducer from "../reducers/devBiosReducers";
import rootSaga from "../sagas";
import AddDeveloper from "../components/AddDeveloper";
import Developer from "../models/Developer";
import * as devAPI from "../apiCalls/devAPI";


let fakeDeveloper = new Developer(
  null,
  "Jason",
  "Monroe",
  "JavaScript",
  "1999"
);

const sagaMiddleware = createSagaMiddleWare();

const store = configureStore({
  reducer: { devBios: devBiosReducer },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));
const timesMockNavigateCalled = 1;

it(`should have a disabled submit button initially, then when a user fills out the 
    form correctly it should make a POST request with the supplied values`, async () => {
  let fetchSpy = jest.spyOn(devAPI, "postDeveloper").mockResolvedValue({});

  render(
    <Provider store={store}>
      <Router>
        <AddDeveloper />
      </Router>
    </Provider>
  );

  const firstNameTextbox = screen.getByTestId("firstName");
  const lastNameTextbox = screen.getByTestId("lastName");
  const favoriteLanguageTextbox = screen.getByTestId("favoriteLanguage");
  const yearStartedTextbox = screen.getByTestId("yearStarted");
  const submitButton = screen.getByText("Submit");

  //assert button is inactive
  expect(submitButton).toBeDisabled();

  fireEvent.change(firstNameTextbox, {
    target: { value: fakeDeveloper.firstName },
  });
  fireEvent.change(lastNameTextbox, {
    target: { value: fakeDeveloper.lastName },
  });
  fireEvent.change(favoriteLanguageTextbox, {
    target: { value: fakeDeveloper.favoriteLanguage },
  });
  fireEvent.change(yearStartedTextbox, {
    target: { value: fakeDeveloper.yearStarted },
  });

  await act(async () => {
    fireEvent.click(submitButton);
  });

  expect(fetchSpy).toHaveBeenCalledWith(fakeDeveloper);
  expect(mockNavigate).toHaveBeenCalledWith("/developers");

});

it(`should display an error message if the POST request fails`, async () => {
  let fetchSpy = jest.spyOn(devAPI, "postDeveloper").mockRejectedValue("404 not found");

  render(
    <Provider store={store}>
      <Router>
        <AddDeveloper />
      </Router>
    </Provider>
  );

  const firstNameTextbox = screen.getByTestId("firstName");
  const lastNameTextbox = screen.getByTestId("lastName");
  const favoriteLanguageTextbox = screen.getByTestId("favoriteLanguage");
  const yearStartedTextbox = screen.getByTestId("yearStarted");
  const submitButton = screen.getByText("Submit");

  fireEvent.change(firstNameTextbox, {
    target: { value: fakeDeveloper.firstName },
  });
  fireEvent.change(lastNameTextbox, {
    target: { value: fakeDeveloper.lastName },
  });
  fireEvent.change(favoriteLanguageTextbox, {
    target: { value: fakeDeveloper.favoriteLanguage },
  });
  fireEvent.change(yearStartedTextbox, {
    target: { value: fakeDeveloper.yearStarted },
  });

  await act(async () => {
    fireEvent.click(submitButton);
  });

  expect(fetchSpy).toHaveBeenCalledWith(fakeDeveloper);
  expect(mockNavigate).toHaveBeenCalledTimes(timesMockNavigateCalled);
  expect(screen.getByText("Error occurred posting Developer: 404 not found")).toBeInTheDocument();
});

