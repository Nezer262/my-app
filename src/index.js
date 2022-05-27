import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App'
import reportWebVitals from './reportWebVitals';
// import state from "./redux/state"
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

reportWebVitals();