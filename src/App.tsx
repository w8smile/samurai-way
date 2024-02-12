import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Music from "./components/music/Music";
import {News} from "./components/news/News";
import {Settings} from "./components/settings/Settings";


const App = () => {
    let dialogsData = [
        { id: 1, name: 'Serggg' },
        { id: 2, name: 'Kri$$$' },
        { id: 3, name: '3loy' },
        { id: 4, name: 'Djanex' },
        { id: 5, name: 'Sam' },
        { id: 6, name: 'STL' },
    ];
    let messageData = [
        { id: 1, message: 'Yo' },
        { id: 2, message: 'Yo!!!' },
        { id: 3, message: 'Krichev the Best' },
        { id: 4, message: 'Pro' },
        { id: 5, message: 'Yo' },
        { id: 6, message: 'Fact' },
    ];

    let messagePostsData = [
        {id: 1, message: "Hi, how are you?", likeCount: 12},
        {id: 2, message: "It's my first post", likeCount: 777},
        {id: 3, message: "It's my first post", likeCount: 7277},
        {id: 4, message: "It's my first post", likeCount: 71277}
    ]
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/' element={<Profile messagePostsData={messagePostsData}/>}/>
                        <Route path='/profile' element={<Profile messagePostsData={messagePostsData}/>}/>
                        <Route path='/dialogs' element={<Dialogs dialogsData={dialogsData} messageData={messageData}/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                    {/*<Profile/>*/}
                    {/*<Dialogs/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
