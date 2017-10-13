import {call, put, takeEvery, takeLatest, all} from 'redux-saga/effects';
import {getTheme} from "../../../theme/default";

export const SHOW_MODAL = '@@xeact/modal/show';
export const HIDE_MODAL = '@@xeact/modal/hide';

export const SWITCH_THEME = '@@xeact/theme/switch';
export const SWITCH_TO_THEME = '@@xeact/theme/switch/success';

export function modal(state = {
    payload: {
        show: false,
    }
}, action = {}) {
    switch (action.type) {
        case SHOW_MODAL:
            return {
                payload: {
                    show: true,
                    ...action.payload
                }
            };
        case HIDE_MODAL:
            return {
                payload: {
                    show: false,
                    ...action.payload
                }
            };
        default:
            return state;
    }
}

export function theme(state = {
    payload: ''
}, action = {}) {
    switch (action.type) {
        case SWITCH_TO_THEME:
            return {
                payload: action.payload
            };
        default:
            return state;
    }
}

/**
 * 切换 theme (包含 theme 与 调色板)
 * @param action
 */
function* switchTheme(action) {
    yield put({
        type: SWITCH_TO_THEME,
        payload: getTheme(action.payload)
    });
}

export function* commonListener () {
    yield all([
        takeEvery(SWITCH_THEME, switchTheme),
    ]);
}
