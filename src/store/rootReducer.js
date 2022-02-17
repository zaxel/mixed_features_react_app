import { applyMiddleware, combineReducers, createStore,  } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { showOnlyStockReducer } from "./showOnlyStockReducer";
import { searchReducer } from "./searchReducer";
import { authReducer } from "./authReducer";
import { todoReducer } from "./todoReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    showOnlyStockReducer,
    searchReducer,
    user: authReducer,
    todo: todoReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(()=>console.log(store.getState()))
