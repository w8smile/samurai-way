import React from "react";
import s from '../myPosts/myPosts.module.css'
import {PostProps, Posts} from "./Post/Posts";

export type MyPostsProps = {
    messagePostsData: PostProps []
}

export const MyPosts = (props: MyPostsProps) => {
    // let MessagePostsData = [
    //     {id: 1, message: "Hi, how are you?", likeCount: 12},
    //     {id: 2, message: "It's my first post", likeCount: 777},
    //     {id: 2, message: "It's my first post", likeCount: 7277}
    // ]
    // let messagesPosts = MessageData.map((el)=><Posts message={el.message} likeCount={el.likeCount}/>)
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
                {props.messagePostsData.map((el)=><Posts message={el.message} likeCount={el.likeCount}/>)}
            </div>
        </div>
    )
}