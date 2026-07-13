import { getDevelopers, postDeveloper } from "../apiCalls/devAPI";
import { put, call, takeLatest, fork } from "redux-saga/effects";
import { getAllBiosSuccess, getAllBiosError, POST_SUCCESS, postBioResponse } from "../reducers/devBiosReducers";
import { ActionTypes } from "../reducers/devBiosReducers";
import { DEV_BIOS_SLICE_NAME } from "../reducers/devBiosReducers";

//workers
export function* getDevBios() {
  try {
    const developers = yield call(getDevelopers);
    yield put(getAllBiosSuccess(developers));
  } catch (error) {
    yield put(getAllBiosError("Error occurred fetching Developers: " + error));
  }
}

export function* postBio(action) {
  try {
    yield call(postDeveloper, action.payload);
    yield put(postBioResponse(POST_SUCCESS))
  } catch (error) {
    yield put(postBioResponse("Error occurred posting Developer: " + error));
  }
}

//watchers
export function* watchGetAllBiosRequest() {
  yield takeLatest(`${DEV_BIOS_SLICE_NAME}/${ActionTypes.GET_ALL_BIOS_REQUEST}`, getDevBios);
}

export function* watchPostBioRequest() {
  yield takeLatest(`${DEV_BIOS_SLICE_NAME}/${ActionTypes.POST_BIO_REQUEST}`, postBio);
}

const developersSagas = [fork(watchGetAllBiosRequest), fork(watchPostBioRequest)];
export default developersSagas;