const ADD_POSTS = "ADD-POSTS"
const ADD_POSTS_CHANGE = "ADD-POSTS-CHANGE"

const profileReducer = (state, action) => {
    if(action.type === ADD_POSTS) {
        let newPost = { 
            id: 4, 
            message: state.newPostText
        };
    
        state.postsData.push(newPost)
        state.newPostText = ""
    } 
    else if(action.type === ADD_POSTS_CHANGE){
        state.newPostText = action.newText
    } 

    return state
}

export default profileReducer