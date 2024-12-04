import {combineReducers, createStore} from "redux";
import {TodoReducer} from "./TodoReducers.tsx";

export const store = createStore(combineReducers({todos: TodoReducer}))