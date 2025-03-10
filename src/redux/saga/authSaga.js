import { put, takeLatest } from "redux-saga/effects";
import { login } from "../../services/api";
import { loginFailure, loginRequest, loginSucess } from "../slices/authSlice";

export function* callLogin(action) {
  try {
    const response = yield login(action.payload);
    console.log("Login Success : ", response);
    yield put(loginSucess(response));
  } catch (e) {
    console.log("Login Failure Error : ", e?.response);

    yield put(loginFailure(e?.response));
  }
}

export function* authSaga() {
  yield takeLatest(loginRequest.type, callLogin);
}
