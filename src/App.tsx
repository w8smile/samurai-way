import React from 'react';
import './App.css';
import { Header } from "./components/header/Header";
import { Navbar } from "./components/navbar/Navbar";
import { Profile } from "./components/profile/Profile";
import { Dialogs } from "./components/dialogs/Dialogs";
import { Route, Routes } from "react-router-dom";
import Music from "./components/music/Music";
import { News } from "./components/news/News";
import { Settings111 } from "./components/settings/Settings";
import { store, StoreType } from "./redux/store";

export type AppProps = {
    store: StoreType
}

const App = (props: AppProps) => {
    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/' element={
                        <Profile
                            dispatch={props.store.dispatch.bind(props.store)}
                            profilePage={store._state.profilePage}
                            newPostText={store._state.profilePage.newPostText}
                        />
                    } />
                    <Route path='/profile' element={
                        <Profile
                            dispatch={props.store.dispatch.bind(props.store)}
                            profilePage={store._state.profilePage}
                            newPostText={store._state.profilePage.newPostText}

                        />
                    } />
                    <Route path='/dialogs/*' element={
                        <Dialogs
                            dispatch = {props.store.dispatch.bind(props.store)}
                            dialogsData={store._state.dialogsPage.dialogsData}
                            messageData={store._state.dialogsPage.messageData}
                            newDialogMessage={store._state.dialogsPage.newDialogMessage}
                        />
                    } />
                    <Route path='/news' element={<News />} />
                    <Route path='/music' element={<Music />} />
                    <Route path='/settings' element={<Settings111 />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
