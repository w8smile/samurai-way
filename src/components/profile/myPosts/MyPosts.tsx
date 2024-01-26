import React from "react";
import s from '../myPosts/myPosts.module.css'
import {Posts} from "./Post/Posts";

export const MyPosts = () => {
    return (
        <div className={s.content}>
            My post
            <div >
                <textarea></textarea>
                <button>Add post</button>
                <button>remove</button>
            </div>
            <div className={s.content}>
                <Posts message="Hi, how are you?" likeCount={33}/>
                <Posts message="It's my first post" likeCount={55}/>
            </div>
        </div>
    )
}