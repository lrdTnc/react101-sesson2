import {Button} from "@mui/material";
import {FancyTextfield} from "./FancyTextfield.tsx";
import {useRef} from "react";
import {useInjection} from "inversify-react";
import {ToDoService} from "./services/ToDoService.ts";
import {Todo} from "./Todo.ts";

export const NewTodo = () => {
    const valueRef = useRef('')
    const todoService = useInjection(ToDoService);
    const onChange = (value) => {
        valueRef.current = value
    }

    const onAddClick = () => {
        todoService.addTodo({id: undefined, title: valueRef.current, isCompleted: false} as Todo)
    }

    return (
        <div>
            <h1>Todo list</h1>
            <FancyTextfield limit={30} onChange={onChange}></FancyTextfield>
            <Button variant="contained" onClick={onAddClick}>Add</Button>
        </div>
    )
}