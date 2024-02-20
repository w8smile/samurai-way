import React from "react";
import s from './Profile.module.css'
import {MyPosts, MyPostsProps} from "./myPosts/MyPosts";
import {ProfileData} from "./ProfileData/ProfileData";


export const Profile = (props: MyPostsProps) => {
    return (
        <div className={s.content}>
            <ProfileData/>
            <MyPosts addPost={props.addPost} postsData={props.postsData}/>
        </div>
    )
}