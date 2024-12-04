import {TodoItem} from "./TodoItem.tsx";
import {useSelector} from "react-redux";
import {Todo} from "./Todo.ts";

export const TodoList = () => {
    const todos = useSelector((state: {todos: Todo[]}) => state.todos);

    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {
                    todos.map((todo, index) => (
                        <TodoItem key={index} todo={todo}></TodoItem>
                    ))
                }
            </ul>
        </div>
    )
}