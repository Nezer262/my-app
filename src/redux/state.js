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
            ]
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
        if(action.type === "ADD-POSTS") {
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
    }
};

export const addPostsActionCreator = () => {
    return {
        type: "ADD-POSTS"
    }
;}

export const onPostChangeActionCreator = (text) => {
    return {
        type: "ADD-POSTS-CHANGE",
        newText: text
    }
}

export default store;