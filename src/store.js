import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import appReducer from "./redux/modules/reducer";
import initSagas from "./redux/initSagas";

// import {composeWithDevTools} from 'remote-redux-devtools';


const sagaMiddleware = createSagaMiddleware();
const middleware = [
    sagaMiddleware,
];

// https://chrome.google.com/webstore/detail/remotedev/faicmgpfiaijcedapokpbdejaodbelph
// const composeEnhancers = composeWithDevTools({
//     realtime: process.env.NODE_ENV === 'development',
// });

const store = createStore(
    appReducer,
    applyMiddleware(...middleware),
);

// const store = createStore(appReducer, composeEnhancers(
//     applyMiddleware(...middleware),
// ));

sagaMiddleware.run(initSagas);


// if (module.hot) {
//     // Enable hot module replacement for reducers
//     module.hot.accept(() => {
//         const nextRootReducer = require('./redux/modules/reducer').default;
//         store.replaceReducer(nextRootReducer);
//     });
// }

export default store;
