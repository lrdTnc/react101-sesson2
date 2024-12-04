import {Todo} from "./Todo.ts";

export const TodoReducer = (state = [] as Todo[], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, action.payload];
        case "UPDATE_TODO":
            return state.map(t => t.id === action.payload.id ? action.payload : t);
        case "CLEAR_TODOS":
            return state.filter(t => !t.isCompleted)
        case "LOAD_TODOS":
            return action.payload;
        default:
            return state;
    }
}