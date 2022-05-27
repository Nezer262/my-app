let state = {
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
            {id: 3, ava: "https://img2.goodfon.ru/wallpaper/nbig/0/25/devushka-blondinka-milaya-7319.jpg", name: "Alena"},
            {id: 4, ava: "https://img2.goodfon.ru/wallpaper/nbig/0/25/devushka-blondinka-milaya-7319.jpg", name: "Alena"}
        ]
    }
}

export let addPosts = () => {
    let newPost = { 
        id: 5, 
        message: state.posts.newPostText
    };

    state.posts.postsData.push(newPost)
    state.posts.newPostText = ""

    rerenderEntireTree(state)
}

export let addPostsChange = (newText) => {
    state.posts.newPostText = newText

    rerenderEntireTree(state)
}

let subscribe = (observer) => {

}

export default state;