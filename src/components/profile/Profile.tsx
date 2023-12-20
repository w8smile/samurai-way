import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./myPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={s.content}>
            <img
                src='https://tripplanet.ru/wp-content/uploads/europe/turkey/kemer/dostoprimechatelnosti-kemera.jpg'/>
            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>
    )
}