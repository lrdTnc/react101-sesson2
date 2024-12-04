import {createContext} from "react";
import {Todo} from "./Todo.ts";

export interface TodoContextType {
    todos: Todo[];
    addTodo: (todo: Todo) => void;
    updateTodo: (todo: Todo) => void;
    clearTodos: () => void;
}

export const TodoContext = createContext<TodoContextType>({
    todos: [],
    addTodo: () => {},
    updateTodo: () => {},
    clearTodos: () => {}
})