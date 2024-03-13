import {PostProps} from "../components/profile/myPosts/Post/Posts";
import {DispatchType, ProfilePageType} from "./store";


export const profileReducer = (state: ProfilePageType, action: DispatchType) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostProps = {
                id: new Date().getTime(),
                message: action.postText,
                likeCount: 0
            }
            state.postsData.push(newPost)
            state.newPostText = ''
            return state;
        case 'CHANGE-POST-MESSAGE':
            state.newPostText = action.newText;
            return state;

        default:
            return state
    }
}
export const addPostAC = (postText: string) => {
    return {
        type: "ADD-POST",
        postText
    } as const

}
export const changePostMessageAC = (newText: string) => {
    return {
        type: "CHANGE-POST-MESSAGE",
        newText
    } as const
}
