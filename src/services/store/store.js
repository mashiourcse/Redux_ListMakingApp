
import {createStore, applyMiddleware} from "redux";
import { reducer } from "../reducer/todoReducer";
import {logger} from "redux-logger";
import { persistStore,persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key:'persist-root',
    storage
}
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer,applyMiddleware(logger));

export const persistor = persistStore(store);