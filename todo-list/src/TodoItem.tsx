import {Todo} from "./Todo.ts";
import {Checkbox} from "@mui/material";
import {useInjection} from "inversify-react";
import {ToDoService} from "./services/ToDoService.ts";

interface TodoItemProps {
    todo: Todo;
}

export const TodoItem = (props: TodoItemProps) => {
    const todoService = useInjection(ToDoService);
    const onCheckboxChange = (event, checked) => {
        const updatedTodo = {...props.todo, isCompleted: checked}
        todoService.updateTodo(updatedTodo);
    }

    return (
        <li>
            <Checkbox checked={props.todo.isCompleted} onChange={onCheckboxChange}></Checkbox>
            <span style={props.todo.isCompleted ? {textDecoration: 'line-through'} : {}}>
                {props.todo.title}
            </span>
        </li>
    )
}