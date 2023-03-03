import React, {useState, useContext} from 'react';
import {observer} from "mobx-react";
import {StoreContext} from "./index";
import {Button, FormControl, makeStyles, TextField} from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';
import SnackBar from "./snackBar";

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(2),
    },
    checkCodeForm: {
        padding: theme.spacing(4),
    }
}));

const Form = () => {
    const store = useContext(StoreContext);
    const classes = useStyles();
    const [code, setCode] = useState("");
    const [validationCodeErr, setValidationCodeErr] = useState(false);


    const validationBrackets = (code: string) => {
        const stack: string[] = [];
        const obj: any = {
            "(": ")",
            "{": "}",
            "[": "]",
            "<": ">"
        };
        for (let i = 0; i < code.length; i++) {
            const bracket: string = code[i];
            if (bracket === "(" || bracket === "{" || bracket === "[" || bracket === "<") {
                stack.push(obj[bracket])
            } else if (bracket === stack[stack.length - 1]) {
                if (stack.length > 0) {
                    stack.pop();
                } else {
                    setValidationCodeErr(true);
                    break;
                }
            }
            if (stack.length === 0) {
                setValidationCodeErr(false);
            } else {
                setValidationCodeErr(true)
            }
        }
    }

    const getHelperCheckCode = () => {
        let res = "Проверьте скобки";
        if (validationCodeErr) return res;
    };

    const setCodeWrapper = (inputValue: string) => {

        if (inputValue !== "") {
            validationBrackets(inputValue)
            setCode(inputValue);
        } else if (inputValue === "") {
            setCode("");
            setValidationCodeErr(true);
        } else {
            setValidationCodeErr(true)
        }
    }


    return <>
        {!store.isSavedSuccessfully &&
            <form className={classes.checkCodeForm}>
                <FormControl fullWidth margin={"dense"}>
                    <TextField
                        id="Code"
                        label="Введите код:"
                        multiline
                        variant="outlined"
                        helperText={getHelperCheckCode()}
                        error={validationCodeErr}
                        fullWidth={true}
                        value={code || ""}
                        onChange={(e) => {
                            setCodeWrapper(e.target.value);
                        }}
                    >
                    </TextField>
                </FormControl>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    disabled={validationCodeErr || code === ""}
                    className={classes.button}
                    startIcon={<SaveIcon/>}
                    onClick={() => {
                        store.setSnackbarIsOpen(true);
                        store.setIsSavedSuccessfully(true);
                    }}
                >
                    Сохранить
                </Button>
            </form>
        }
        <SnackBar/>
    </>

}

export default observer(Form);
