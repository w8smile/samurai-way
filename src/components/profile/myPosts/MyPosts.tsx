import React from "react";
import s from '../myPosts/myPosts.module.css'
import {PostProps, Posts} from "./Post/Posts";

export type MyPostsProps = {
    postsData: PostProps []
    addPost: (postMessage : string )=> void
    newPostText: string
    updateNewText: (newText: string)=> void
}

export const MyPosts = (props: MyPostsProps) => {
    let newPostEl = React.createRef<HTMLTextAreaElement>()
    const addPostHandler = () => {
        if (newPostEl.current) {
            props.addPost(newPostEl.current.value);
        }
    }
    const onChangeHandler = () => {
        if(newPostEl.current) {
            props.updateNewText(newPostEl.current.value)
        }

    }
    return (
        <div  className={s.content + ' ' + s.myPostsBlock}>
            <div>
                My post
                <div>
                    <div>
                        <textarea onChange={onChangeHandler} ref={newPostEl} value={props.newPostText}></textarea>
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