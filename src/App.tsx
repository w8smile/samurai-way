import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import Music from "./components/music/Music";
import {News} from "./components/news/News";
import {Settings111} from "./components/settings/Settings";
import {addPost, StateType} from "./redux/state";

export type AppProps = {
    state: StateType
    addPost: (postMessage : string)=>void

}

const App = (props : AppProps) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/' element={<Profile addPost={addPost} postsData={props.state.profilePage.postsData}/>}/>
                        <Route path='/profile' element={<Profile addPost={addPost} postsData={props.state.profilePage.postsData}/>}/>
                        <Route path='/dialogs/*' element={<Dialogs dialogsData={props.state.dialogsPage.dialogsData} messageData={props.state.dialogsPage.messageData}/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings111/>}/>
                        <Route path='/settings' element={<Settings111/>}/>
                    </Routes>
                    {/*<Profile/>*/}
                    {/*<Dialogs/>*/}
                </div>
            </div>

    );
}


export default App;
