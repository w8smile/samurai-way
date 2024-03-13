import {PostProps} from "../components/profile/myPosts/Post/Posts";
import {DialogProps} from "../components/dialogs/DialogItems/DialogItems";
import {MessageProps} from "../components/dialogs/Messages/MessagesDialog";
import {addPostAC, changePostMessageAC, profileReducer} from "./profile-reducer";
import {addDialogMessageAC, changeDialogMessageAC, dialogReducer} from "./dialog-reducer";


export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}

export type ProfilePageType = {
    postsData: PostProps []
    newPostText: string
}

export type DialogPageType = {
    dialogsData: DialogProps []
    messageData: MessageProps []
    newDialogMessage: string
}

export type StoreType = {
    _state: StateType
    _onChange: () => void
    subscribe: (callback: () => void) => void
    getState: () => StateType
    dispatch: (action: DispatchType) => void
}

export type DispatchType = ReturnType<typeof changePostMessageAC> |
    ReturnType<typeof addPostAC> |
    ReturnType<typeof addDialogMessageAC> |
    ReturnType<typeof changeDialogMessageAC>



export const store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: "Hi, how are you?", likeCount: 12},
                {id: 2, message: "It's my first post", likeCount: 777},
                {id: 3, message: "AEEE", likeCount: 7277},
                {id: 4, message: "IT KAMASUTRA", likeCount: 71277}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Serggg'},
                {id: 2, name: 'Kri$$$'},
                {id: 3, name: '3loy'},
                {id: 4, name: 'Djanex'},
            ],
            messageData: [
                {id: 1, message: 'Yo'},
                {id: 2, message: 'Yo!!!'},
                {id: 3, message: 'Krichev the Best'},
                {id: 4, message: 'Pro'},
            ],
            newDialogMessage: ''

        }
    },
    _onChange() {
        alert('RENDER')
    },
    subscribe(callback) {
        this._onChange = callback; // НАБЛЮДАТЕЛЬ, ПРИ КАЖДОМ НАЖАТИИ НА ФУНКЦИИ
        // ВЫЗЫВАЕТ subscribe(renderTree) В INDEX;
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
        this._onChange()
    }
}
