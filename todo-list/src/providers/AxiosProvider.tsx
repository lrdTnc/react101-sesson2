import {Container} from "inversify";
import {AxiosService} from "../services/AxiosService.tsx";
import {Provider} from "inversify-react";

export const AxiosProvider = ({children}) => {
return (
        <Provider container={()=> {
            const container = new Container();
            container.bind(AxiosService).toConstantValue(new AxiosService());
            return container;
        }}>
            {children}
        </Provider>
    )
}