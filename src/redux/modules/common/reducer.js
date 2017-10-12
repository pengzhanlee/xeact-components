export const SHOW_MODAL = 'admin/Common/modal/show';
export const HIDE_MODAL = 'admin/Common/modal/hide';

export function modal(state = {payload: {
    show: false,
}}, action = {}) {
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
