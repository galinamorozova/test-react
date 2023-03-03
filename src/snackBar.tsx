import React, {useContext} from "react";
import {StoreContext} from "./index";
import {observer} from "mobx-react";
import {Alert, AlertTitle} from "@material-ui/lab";
import Snackbar from "@material-ui/core/Snackbar";

const SnackBar = () => {

    const store = useContext(StoreContext);


    return <Snackbar
            open={store.snackbarIsOpen}
            ContentProps={{
                "aria-describedby": "message-id"
            }}
            anchorOrigin={{ vertical: "top", horizontal: "center"}}
        >
            <Alert severity='success'>
                <AlertTitle> Сохранено успешно</AlertTitle>
            </Alert>
        </Snackbar>
}

export default observer(SnackBar)

