import { action, makeAutoObservable } from "mobx"


class GeneralStore {
    snackbarIsOpen: boolean = false;
    snackBarTimer: any;
    successTimer: any;
    isSavedSuccessfully: boolean = false;


    constructor() {
        makeAutoObservable(this)
    }

    @action
    setSnackbarIsOpen (bool: boolean) {
        if(this.snackBarTimer) clearTimeout(this.snackBarTimer);
        this.snackbarIsOpen = bool;
        this.snackBarTimer = setTimeout(() => {
            this.snackbarIsOpen = false;
        }, 2000);
    }

    @action
    setIsSavedSuccessfully (bool: boolean) {
        if(this.successTimer) clearTimeout(this.successTimer);
        this.isSavedSuccessfully = bool;
        this.successTimer = setTimeout(() => {
            this.isSavedSuccessfully = false;
        }, 2000);
    }

};

export default GeneralStore
