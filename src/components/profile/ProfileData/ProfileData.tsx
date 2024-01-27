import React from "react";
import s from './ProfileData.module.css'

export const ProfileData = () => {
    return (
        <div>
            <img
                src='https://tripplanet.ru/wp-content/uploads/europe/turkey/kemer/dostoprimechatelnosti-kemera.jpg'/>
            <div className={s.profileDataBlock}>
                ava+description
            </div>
        </div>
    )
}