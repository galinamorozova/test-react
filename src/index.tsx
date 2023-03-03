import React, {createContext} from "react"
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GeneralStore from "./store";

export const StoreContext = createContext<GeneralStore>({} as GeneralStore);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
reportWebVitals();
