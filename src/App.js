import './App.css';
import React from 'react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Profile from './components/profile/Profile';
import Messages from './components/messages/Messages';
import News from './components/news/News';
import Friends from './components/friends/Friends';
import Settings from './components/settings/Settings';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <div className='main'>
          <Sidebar />
          <div className='main-content'>
          <Routes>
            <Route path='/profile' element={<Profile state={props.state} dispatch={props.dispatch}/>}/>
            <Route path='/messages' element={<Messages state={props.state} dispatch={props.dispatch}/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/friends' element={<Friends state={props.state}/>}/>
            <Route path='/settings' element={<Settings/>}/>
          </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;