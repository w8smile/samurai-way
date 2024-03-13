import React, {ChangeEvent} from "react";
import s from '../myPosts/myPosts.module.css'
import {PostProps, Posts} from "./Post/Posts";
import {DispatchType} from "../../../redux/store";
import {addPostAC, changePostMessageAC} from "../../../redux/profile-reducer";

export type MyPostsProps = {
    postsData: PostProps []
    newPostText: string
    dispatch: (action: DispatchType)=> void
}


export const MyPosts = (props: MyPostsProps) => {
    const addPostHandler = () => {
            // props.addPost(props.newPostText);
            props.dispatch(addPostAC(props.newPostText))
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changePostMessageAC(e.currentTarget.value))
    }
    return (
        <div  className={s.content + ' ' + s.myPostsBlock}>
            <div>
                My post
                <div>
                    <div>
                        <textarea onChange={onChangeHandler} value={props.newPostText}></textarea>
                    </div>
                    <div>
                        <button onClick={addPostHandler}>Add post</button>
                    </div>
                    <div>
                        <button>remove</button>
                    </div>

                </div>
            </div>
            <div
                className={s.content}>
                {props.postsData.map((el)=><Posts id={el.id} message={el.message} likeCount={el.likeCount} />)}
            </div>
        </div>
    )
}
