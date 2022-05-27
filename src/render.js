/* import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPosts} from "./redux/state"
import {addPostsChange} from "./redux/state"

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} addPosts={addPosts} addPostsChange={addPostsChange}/>
    </React.StrictMode>
  );
}

export default rerenderEntireTree; */