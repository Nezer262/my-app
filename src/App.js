import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />
                <div className='app-wrapper-content'>
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path="/dialogs/" element={<DialogsContainer/>} />
                            <Route path="/profile/*" element={<ProfileContainer/>} />
                        </Routes>
                    </React.Suspense>
                    <Routes>
                        <Route path='/profile/:userId' element={<ProfileContainer/> }/>
                        <Route path='/users/' element={<UsersContainer/> }/>
                        <Route path='/login/' element={<Login/> }/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
        )
}

export default App;