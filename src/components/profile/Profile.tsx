import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileData} from "./ProfileData/ProfileData";
import {DispatchType, ProfilePageType} from "../../redux/store";


type ProfileProps = {
    profilePage: ProfilePageType
    newPostText: string
    dispatch: (action: DispatchType) => void
}

export const Profile = (props: ProfileProps) => {
    return (
        <div className={s.content}>
            <ProfileData/>
            <MyPosts
                     postsData={props.profilePage.postsData}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    )
}
