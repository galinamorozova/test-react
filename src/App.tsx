import React from 'react';
import './App.css';
import {Typography} from "@material-ui/core";
import {StoreContext} from "./index";
import Form from "./form";
import GeneralStore from "./store";



function App() {

    return (
        <StoreContext.Provider value={new GeneralStore}>
            <div className="App">
                <header className="header">
                    <Typography color={"primary"} variant={'h4'}>
                        Проверка кода на корректность
                    </Typography>
                </header>
                <Form/>
            </div>
        </StoreContext.Provider>
    );
}

export default App;
