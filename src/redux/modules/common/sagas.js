import {call, put, takeEvery, takeLatest, all} from 'redux-saga/effects';
import {SWITCH_THEME, switchTheme} from "./theme";

export function* commonSagas () {
    yield all([
        takeEvery(SWITCH_THEME, switchTheme),
    ]);
}
