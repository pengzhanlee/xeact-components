import {all, takeEvery} from 'redux-saga/effects';
import {SWITCH_THEME, switchTheme} from "./theme";

export function* commonSagas () {
    yield all([
        takeEvery(SWITCH_THEME, switchTheme),
    ]);
}
