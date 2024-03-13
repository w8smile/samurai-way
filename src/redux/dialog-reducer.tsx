import {DialogPageType, DispatchType} from "./store";

export const dialogReducer = (state: DialogPageType, action: DispatchType) => {
    switch (action.type) {
        case 'ADD-DIALOG-MESSAGE':
            let newMessage = {id: 5, message: action.message}
            state.messageData.push(newMessage);
            state.newDialogMessage = ''
            return state;
        case "CHANGE-DIALOG-MESSAGE":
            state.newDialogMessage = action.messageText;
            return state
        default:
            return state
    }
}


export const addDialogMessageAC = (message: string) => {
    return {
        type: 'ADD-DIALOG-MESSAGE',
        message
    } as const
}
export const changeDialogMessageAC = (messageText: string) => {
    return {
        type: 'CHANGE-DIALOG-MESSAGE',
        messageText
    } as const
}
