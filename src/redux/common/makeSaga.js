/**
 * Created by pengzhanlee on 2017/7/17.
 */
import {call, put, takeEvery, takeLatest, all} from 'redux-saga/effects'
import apiClient from 'jdreact-jsbundle-JDReactAPIDemos/jsbundles/src/helpers/client';

export default
function makeSaga(actions = {}, request) {
    const {types, promise} = actions;
    const [FULFILLED, FAILURE, CLEAR] = types;

    return function*(action) {
        try {
            // const payload = yield call(apiClient.get, request(action));
            const payload = yield call(promise, apiClient, action);

            if (CLEAR) {
                yield put({
                    type: CLEAR,
                });
            }

            yield put({
                type: FULFILLED,
                payload
            });
        } catch (e) {
            yield put({
                type: FAILURE,
                payload: {err: e}
            });
        }
    }

}