import {PostProps} from "../components/profile/myPosts/Post/Posts";
import {DialogProps} from "../components/dialogs/DialogItems/DialogItems";
import {MessageProps} from "../components/dialogs/Messages/MessagesDialog";


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
    addMessageDialog: (message: string) => void
    changeMessageDialog: (messageText: string) => void
    addPost: (postMessage: string) => void
    changeAddPost: (newText: string) => void
    _onChange: ()=> void
    subscribe: (callback: () => void)=>void
    getState: ()=> StateType
}
export const store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: "Hi, how are you?", likeCount: 12},
                {id: 2, message: "It's my first post", likeCount: 777},
                {id: 3, message: "It's my first post", likeCount: 7277},
                {id: 4, message: "It's my first post", likeCount: 71277}
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
    addMessageDialog(message: string) {
        let newMessage = {id: 5, message}
        this._state.dialogsPage.messageData.push(newMessage);
        this._state.dialogsPage.newDialogMessage = ''
        this._onChange()
    },
    changeMessageDialog(messageText: string) {
        this._state.dialogsPage.newDialogMessage = messageText;
        this._onChange()
    },
    addPost(postMessage: string) {
        let newPost = {
            id: 5,
            message: postMessage,
            likeCount: 0
        }
        this._state.profilePage.postsData.push(newPost)
        this._state.profilePage.newPostText = ''
        this._onChange()
    },
    changeAddPost(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._onChange()
    },
    _onChange() {
        alert('RENDER')
    },
    subscribe(callback) {
        this._onChange = callback; // НАБЛЮДАТЕЛЬ, ПРИ КАЖДОМ НАЖАТИИ НА ФУНКЦИИ
        // ВЫЗЫВАЕТ subscribe(renderTree) В INDEX;
    },
    getState(){
        return this._state
    }
}