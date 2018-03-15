export const initialState = {
    loaded: false,
    loading: false,
    payload: {
        page: {}
    }
};

/**
 * 创建简单Reducer
 * @param fetchAction
 * @param successAction
 * @param failAction
 * @param {=} clearAction
 * @returns {Function}
 */
export function makeBasicReducer(fetchAction, successAction, failAction, clearAction) {

    return function (state = initialState, action = {}) {
        switch (action.type) {
            case fetchAction:
                return {
                    ...state,
                    loading: true
                };
            case successAction:

                return {
                    ...state,
                    loading: false,
                    loaded: true,
                    payload: action.payload,
                    error: null
                };
            case failAction:
                return {
                    ...state,
                    loading: false,
                    loaded: false,
                    payload: initialState.payload,
                    error: action.payload
                };

            case clearAction:
                return {
                    ...state,
                    loading: false,
                    loaded: false,
                    payload: initialState.payload,
                    error: null
                };
            default:
                return state;
        }
    }
}


/**
 * 创建简单Reducer
 * @param keys
 * @param fetchAction
 * @param successAction
 * @param failAction
 * @param {=} clearAction
 * @returns {Function}
 *
 * @example
 * makeExtensibleReducer([{
        key: 'topicList',
        type: Array
    }], ...);
 */
export function makeExtensibleReducer(keys = [], fetchAction, successAction, failAction, clearAction) {
    return function (state = initialState, action = {}) {
        switch (action.type) {
            case fetchAction:
                return {
                    ...state,
                    loading: true,
                };
            case successAction:

                let data = action.payload;

                keys.forEach((item) => {
                    let key = item.key,
                        keyType = item.type;

                    if (keyType === Array) {
                        let toBeExtend = state.payload[key] || [];
                        if (data[key]) {
                            data[key] = toBeExtend.concat(data[key]);
                        }
                    } else if (keyType === Object) {
                        data[key] = Object.assign({}, state.payload[key], data[key]);
                    }

                });

                return {
                    ...state,
                    loading: false,
                    loaded: true,
                    payload: data,
                    error: null
                };
            case failAction:
                return {
                    ...state,
                    loading: false,
                    loaded: false,
                    payload: initialState.payload,
                    error: action.error
                };

            case clearAction:
                return {
                    ...state,
                    loading: false,
                    loaded: false,
                    payload: initialState.payload,
                    error: null
                };
            default:
                return state;
        }
    }
}