import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileData} from "./ProfileData/ProfileData";

export const Profile = () => {
    return (
        <div className={s.content}>
            <ProfileData/>
            <MyPosts/>
        </div>
    )
}