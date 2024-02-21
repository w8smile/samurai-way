import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileData} from "./ProfileData/ProfileData";
import {ProfilePageType} from "../../redux/state";


type ProfileProps = {
    profilePage: ProfilePageType
    addPost: (postMessage : string)=>void
    newPostText: string
    changeAddPost: (newText: string)=> void
}

export const Profile = (props: ProfileProps) => {
    return (
        <div className={s.content}>
            <ProfileData/>
            <MyPosts addPost={props.addPost}
                     postsData={props.profilePage.postsData}
                     newPostText={props.profilePage.newPostText}
                     updateNewText={props.changeAddPost} />
        </div>
    )
}