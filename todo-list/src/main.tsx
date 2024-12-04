import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {ToDoProvider} from "./providers/ToDoProvider.tsx";
import {AxiosProvider} from "./providers/AxiosProvider.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AxiosProvider>
            <ToDoProvider>
                <App />
            </ToDoProvider>
        </AxiosProvider>
    </StrictMode>,
)
