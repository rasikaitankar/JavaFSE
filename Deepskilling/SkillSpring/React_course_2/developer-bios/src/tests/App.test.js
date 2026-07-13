import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import devBiosReducer from "../reducers/devBiosReducers";
import createSagaMiddleWare from "@redux-saga/core";
import { watchGetAllBiosRequest } from "../sagas/devsSagas";
import AuthContext from "../contexts/Auth";



const sagaMiddleware = createSagaMiddleWare();

const store = configureStore({
  reducer: { devBios: devBiosReducer },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(watchGetAllBiosRequest);



test("renders home component on landing", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders home component on landing", () => {
  render(
    <Provider store={store}>
      <AuthContext.Provider value={{isLoggedIn:true}}>
        <App />
      </AuthContext.Provider>
    </Provider>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
