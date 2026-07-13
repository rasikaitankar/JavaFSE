import React, { act } from "react";
import { render, screen } from "@testing-library/react";
import createSagaMiddleWare from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import Developer from "../models/Developer";
import rootSaga from "../sagas";
import devBiosReducer from "../reducers/devBiosReducers";
import * as devAPI from "../apiCalls/devAPI";
import DisplayBios from "../components/DisplayBios";

let fakeDevs = [
  new Developer("1", "Jason", "Monroe", "JavaScript", 1999),
  new Developer("2", "Steve", "Wozniac", "Objective C", 1970),
];

const sagaMiddleware = createSagaMiddleWare();

const store = configureStore({
  reducer: { devBios: devBiosReducer },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

it(`Given I navigate to DisplayBios component,
    when the fetch call is successful,
    then the bios should be displayed`, async () => {
  let mockGetDevelopers = jest
    .spyOn(devAPI, "getDevelopers")
    .mockResolvedValue(fakeDevs);

  await act(async () =>
    render(
      <Provider store={store}>
        <BrowserRouter>
          <DisplayBios />
        </BrowserRouter>
      </Provider>
    )
  );

  const bio1 = screen.getByText(/Jason Monroe's Bio/);
  expect(bio1).toBeInTheDocument();
  expect(mockGetDevelopers).toHaveBeenCalledTimes(1);
});

it(`Given I navigate to DisplayBios component,
    when the fetch call fails,
    then an error message should appear`, async () => {
  let mockGetDevelopers = jest
    .spyOn(devAPI, "getDevelopers")
    .mockRejectedValue("404 Error");

  await act(async () =>
    render(
      <Provider store={store}>
        <BrowserRouter>
          <DisplayBios />
        </BrowserRouter>
      </Provider>
    )
  );

  const error = screen.getByText(
    /Error occurred fetching Developers: 404 Error/
  );
  expect(mockGetDevelopers).toHaveBeenCalledTimes(1);
  expect(error).toBeInTheDocument();
});
