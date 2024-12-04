import {Button} from "@mui/material";
import {ToDoService} from "./services/ToDoService.ts";
import {useInjection} from "inversify-react";
export const ClearButton = () => {
    const todoService = useInjection(ToDoService);
    const clearTodos = () => {
        todoService.clearTodos();
    }

    return (
        <Button variant="contained" onClick={clearTodos}>
            Clear Todo
        </Button>
    )
}