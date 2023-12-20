import React from "react";
import s from './Posts.module.css'


export type PostPropsType = {
    message: string
    likeCount: number
}
export const Posts = (props: PostPropsType) => {
    return (
        <div>
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