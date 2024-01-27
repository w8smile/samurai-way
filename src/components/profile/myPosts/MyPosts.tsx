import React from "react";
import s from '../myPosts/myPosts.module.css'
import {Posts} from "./Post/Posts";

export const MyPosts = () => {
    let MessageData = [
        {id: 1, message: "Hi, how are you?", likeCount: 12},
        {id: 2, message: "It's my first post", likeCount: 777}
    ]
    return (
        <div  className={s.content + ' ' + s.myPostsBlock}>
            <div>
                My post
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                    <div>
                        <button>remove</button>
                    </div>

                </div>
            </div>
            <div className={s.content}>
                {/*<Posts message="Hi, how are you?" likeCount={33}/>*/}
                {/*<Posts message="It's my first post" likeCount={55}/>*/}
                <Posts message={MessageData[0].message} likeCount={MessageData[0].likeCount}/>
                <Posts message={MessageData[1].message} likeCount={MessageData[13].likeCount}/>
            </div>
        </div>
    )
}