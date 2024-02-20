import {PostProps} from "../components/profile/myPosts/Post/Posts";
import {DialogProps} from "../components/dialogs/DialogItems/DialogItems";
import {MessageProps} from "../components/dialogs/Messages/MessagesDialog";
import {renderTree} from "../render";


export type StateType = {
        profilePage:{
            postsData: PostProps []
        }
        dialogsPage: {
            dialogsData: DialogProps []
            messageData: MessageProps []
        }
}
export let state: StateType = {
    profilePage: {
        postsData: [
            {id: 1, message: "Hi, how are you?", likeCount: 12},
            {id: 2, message: "It's my first post", likeCount: 777},
            {id: 3, message: "It's my first post", likeCount: 7277},
            {id: 4, message: "It's my first post", likeCount: 71277}
        ]
    },
    dialogsPage: {
        dialogsData: [
            { id: 1, name: 'Serggg' },
            { id: 2, name: 'Kri$$$' },
            { id: 3, name: '3loy' },
            { id: 4, name: 'Djanex' },
            { id: 5, name: 'Sam' },
            { id: 6, name: 'STL' },
        ],
        messageData: [
            { id: 1, message: 'Yo' },
            { id: 2, message: 'Yo!!!' },
            { id: 3, message: 'Krichev the Best' },
            { id: 4, message: 'Pro' },
            { id: 5, message: 'Yo' },
            { id: 6, message: 'Fact' },
        ]
    }
}


export const addPost = (postMessage : string) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likeCount: 0
    }
    state.profilePage.postsData.push(newPost)
    renderTree(state)
}