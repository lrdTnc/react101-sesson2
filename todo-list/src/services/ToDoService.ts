import {AxiosInstance} from "axios";
import {store} from "../store.tsx";
import {Todo} from "../Todo.ts";

export class ToDoService {
    todoApi: AxiosInstance;
    constructor(todoApi: AxiosInstance) {
        this.todoApi = todoApi;
    }

    public async addTodo(newTodo: Todo) {
        const response = await this.todoApi.post('/todos', newTodo);
        store.dispatch({type: "ADD_TODO", payload: response.data})
    }

    public async updateTodo(updatedTodo: Todo) {
        const response = await this.todoApi.put(`/todos/${updatedTodo.id}`, updatedTodo);
        store.dispatch({type: "UPDATE_TODO", payload: response.data})
    }

    public async clearTodos() {
        const deletePromises = []
        store.getState().todos.forEach((todo: Todo) => {
            if (todo.isCompleted) {
                deletePromises.push(this.todoApi.delete(`/todos/${todo.id}`))
            }
        });
        await Promise.all(deletePromises);
        store.dispatch({type: "CLEAR_TODOS"})
    }

    public async loadTodos() {
        const response = await this.todoApi.get('/todos')
        store.dispatch({type: "LOAD_TODOS", payload: response.data})
    }
}