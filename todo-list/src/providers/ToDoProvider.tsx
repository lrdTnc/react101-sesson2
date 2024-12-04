import {Provider, useInjection} from 'inversify-react';
import {Container} from 'inversify';
import {ToDoService} from "../services/ToDoService.ts";
import {AxiosService} from "../services/AxiosService.tsx";
export const ToDoProvider = ({children}) => {
    const axiosService = useInjection(AxiosService);
    return (
        <Provider container={()=> {
            const container = new Container();
            const toDoApi = axiosService.create({
                baseURL: 'http://localhost:5000/',
                timeout: 1000
            });
            const toDoService = new ToDoService(toDoApi);
            container.bind(ToDoService).toConstantValue(toDoService);
            return container;
        }}>
            {children}
        </Provider>
    )
}