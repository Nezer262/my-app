import React from 'react';
import { addPostsActionCreator, onPostChangeActionCreator } from '../../../redux/state';
import s from "./MyPosts.module.css"
import Post from './post/Post';



const MyPosts = (props) => {
    let newPostElement = React.createRef();

    let postsElement = props.state.posts.postsData.map(p => <Post message={p.message}/>)

    let newPost = () => {
        props.dispatch(addPostsActionCreator())
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(onPostChangeActionCreator(text))
    };

    return (
        <div className={s.posts}>
            <h3 className={s.mypost}>My post</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.state.posts.newPostText} className={s.newpost} placeholder='New Post'></textarea>
            </div>
            <div>
                <button onClick={newPost} className={s.btn}>Add Post</button>
            </div>
            <div>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts