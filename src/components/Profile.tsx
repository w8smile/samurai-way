import React from "react";
import './Profile.css'

export const Profile = () => {
    return (
        <div className='content'>
            <img
                src='https://tripplanet.ru/wp-content/uploads/europe/turkey/kemer/dostoprimechatelnosti-kemera.jpg'/>
            <div >
                ava+description
            </div>
            <div>
                My post
                <div>
                    new post
                </div>
                <div>
                    <div className='item'>post 1</div>
                    <div className='item'>post 2</div>
                </div>
            </div>
        </div>
    )
}