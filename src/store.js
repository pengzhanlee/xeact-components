import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import appReducer from "./redux/modules/reducer";
import initSagas from "./redux/initSagas";

const sagaMiddleware = createSagaMiddleware();
const middleware = [
    sagaMiddleware,
];

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md
        }) : compose;

const store = createStore(
    appReducer,
    composeEnhancers(applyMiddleware(...middleware)),
);

sagaMiddleware.run(initSagas);

export default store;
