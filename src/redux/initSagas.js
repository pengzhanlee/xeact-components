import {fork, all, take} from 'redux-saga/effects';
import {commonSagas} from "./modules/common/sagas";


export default function* initSagas() {
    yield all([
        fork(commonSagas)
    ]);
}
