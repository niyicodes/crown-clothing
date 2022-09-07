import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import RootReducer from "./rootReducer";


const store = createStore(RootReducer, applyMiddleware(logger));

const persistor = persistStore(store);

export {store, persistor};