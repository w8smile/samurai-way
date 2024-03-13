import React from "react";
import s from './Posts.module.css'


export type PostProps = {
    id: number
    message: string
    likeCount: number
}
export const Posts = (props: PostProps) => {
    // let MessageData = [
    //     {id: 1, message: "Hi, how are you?", likeCount: 12},
    //     {id: 2, message: "It's my first post", likeCount: 777},
    //     {id: 3, message: "It's my first post", likeCount: 2775}
    // ]
    return (
        <div className={s.content}>
            <div className={s.item}>
                <img
                    src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f370ee106914163.5ff7b7a6a1881.jpg'/>
                {props.message}</div>
            <div>
                <span>{props.likeCount}</span>
            </div>
        </div>
    )
}
