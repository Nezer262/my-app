const ADD_MESSAGE = "ADD-MESSAGE"
const ADD_MESSAGE_CHANGE = "ADD-MESSAGE-CHANGE"

const dialogsReducer = (state, action) => {
    if(action.type === ADD_MESSAGE_CHANGE) {
        state.newMessageText = action.newMessage
    }
    else if(action.type === ADD_MESSAGE) {
        let bodyText = state.newMessageText
        state.messagesData.push({id: "5", message: bodyText})
        state.newMessageText = ""
    }

    return state
}

export default dialogsReducer