import {NewTodo} from "./NewTodo.tsx";
import {TodoList} from "./TodoList.tsx";
import {ClearButton} from "./ClearButton.tsx";
import {Provider} from "react-redux";
import {store} from "./store.tsx";
import {useEffect} from "react";
import {useInjection} from "inversify-react";
import {ToDoService} from "./services/ToDoService.ts";

function App() {
    const todoService = useInjection(ToDoService);
    useEffect(() => {
        todoService.loadTodos();
    }, []);

    return (
        <Provider store={store}>
            <div>
                <NewTodo></NewTodo>
                <TodoList></TodoList>
                <ClearButton></ClearButton>
            </div>
        </Provider>
    )
}

export default App
