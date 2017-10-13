import {fork, all, take} from 'redux-saga/effects';
import {commonListener} from "./modules/common/reducer";


export default function* initSagas() {
    yield all([
        fork(commonListener)
    ]);
}
