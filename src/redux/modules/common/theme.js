import {getTheme} from "../../../theme/default";

export const SWITCH_THEME = '@@xeact/theme/switch';
export const SWITCH_TO_THEME = '@@xeact/theme/switch/success';

export function theme(state = {
    payload: null
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
export function* switchTheme(action) {
    yield put({
        type: SWITCH_TO_THEME,
        payload: getTheme(action.payload)
    });
}
