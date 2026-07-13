import { all } from "redux-saga/effects";
import developersSagas from "./devsSagas";

export default function* rootSaga() {
  yield all([...developersSagas]);
}