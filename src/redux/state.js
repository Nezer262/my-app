import profileReducer from "./profile-reducer";
import dialogsReducer from "./profile-reducer";

const ADD_MESSAGE = "ADD-MESSAGE"
const ADD_MESSAGE_CHANGE = "ADD-MESSAGE-CHANGE"
const ADD_POSTS = "ADD-POSTS"
const ADD_POSTS_CHANGE = "ADD-POSTS-CHANGE"


let store = {
    _state: {
        dialogs: {
            dialogsData: [
                {id: 1, name: "Andrey"},
                {id: 2, name: "Irina"},
                {id: 3, name: "Vladimir"},
                {id: 4, name: "Danil"},
                {id: 5, name: "Alena"}
            ],
            messagesData: [
                {id: 1, message: "Hello"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "I'm good"}
            ],
            newMessageText: ""
        },
        posts: {
            postsData: [
                {id: 1, message: "Hello"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "Good"}
            ],
            newPostText: ""
        },
        friends: {
            friendsData: [
                {id: 1, ava: "https://img2.goodfon.ru/wallpaper/nbig/0/25/devushka-blondinka-milaya-7319.jpg", name: "Irina"},
                {id: 2, ava: "https://img2.goodfon.ru/wallpaper/nbig/0/25/devushka-blondinka-milaya-7319.jpg", name: "Andrey"},
                {id: 3, ava: "https://img2.goodfon.ru/wallpaper/nbig/0/25/devushka-blondinka-milaya-7319.jpg", name: "Alena"}
            ]
        }
    },
    getState() {
        return this._state
    },
    _rerenderEntireTree () {
        console.log("It's crazy")
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer
    },

    dispatch(action){

        this._state.posts = profileReducer(this._state.posts, action)
        this._state.dialogs = dialogsReducer(this._state.dialogs, action)
        debugger

        this._rerenderEntireTree(this._state)

        /* if(action.type === "ADD-POSTS") {
            let newPost = { 
                id: 4, 
                message: this._state.posts.newPostText
            };
        
            this._state.posts.postsData.push(newPost)
            this._state.posts.newPostText = ""
        
            this._rerenderEntireTree(this._state)
        } 
        else if(action.type === "ADD-POSTS-CHANGE"){
            this._state.posts.newPostText = action.newText
    
            this._rerenderEntireTree(this._state)
        }
        else if(action.type === "ADD-MESSAGE") {
            let newMessage = {
                id: 5,
                message: this._state.dialogs.newMessageText
            }

            this._state.dialogs.messagesData.push(newMessage)
            this._state.dialogs.newMessageText = ""

            this._rerenderEntireTree(this._state)
        } 
        else if(action.type === "ADD-MESSAGE-CHANGE") {
            this._state.dialogs.newMessageText = action.newMessage

            this._rerenderEntireTree(this._state)
        } */
    }
};

export const addPostsActionCreator = () => {
    return {
        type: ADD_POSTS
    }
;}

export const onPostChangeActionCreator = (text) => {
    return {
        type: ADD_POSTS_CHANGE,
        newText: text
    }
};

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const onMessageChangeActionCreator = (text) => {
    return {
        type: ADD_MESSAGE_CHANGE,
        newMessage: text
    }
}

export default store;