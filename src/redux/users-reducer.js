import { usersAPI } from './../api/api';

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_COUNT = "SET_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWED_PROGRESS = "TOGGLE_IS_FOLLOWED_PROGRESS"

let initialState = {
    users: [],
    pageSize: 5,
    countSize: 25,
    currentPage: 1,
    isFetching: true,
    isFollowedProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: 
            return {...state, users: action.users}
        case SET_CURRENT_PAGE: 
            return {...state, currentPage: action.currentPage}
        case SET_USERS_COUNT: 
            return {...state, countSize: action.countSize}
        case TOGGLE_IS_FETCHING: 
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWED_PROGRESS: 
            return {...state, 
                isFollowedProgress: action.isFollowedProgress ?
                [...state.isFollowedProgress, action.userID] :
                state.isFollowedProgress.filter(id => id != action.userID)
            }
        default:
            return state;
    }
}


export const follow = (userID) => ({type: FOLLOW, userID})
export const unfollow = (userID) => ({type: UNFOLLOW, userID })
export const setUsers = (users) => ({type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage })
export const setUsersCount = (countSize) => ({type: SET_USERS_COUNT, countSize })
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching })
export const toggleIsFollowedProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWED_PROGRESS, isFetching, userId })

export const getUserPageThunkCreator = (pageSize, countSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(pageSize, countSize).then(data => {
            dispatch(setUsers(data.items))
            /* this.props.setUsersCount(data.totalCount) */
        dispatch(toggleIsFetching(false))
        })
    }
}

export const getUserActiveThunkCreator = (numberPage, countSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(numberPage))
        usersAPI.getUsers(numberPage, countSize).then(data => {
                dispatch(setUsers(data.items))
                dispatch(toggleIsFetching(false))
            })
    }
}

export const followThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(toggleIsFollowedProgress(true, id))
        usersAPI.follow(id)
        .then(data => {
            if(data.resultCode === 0) {
                dispatch(follow(id))
                dispatch(toggleIsFollowedProgress(false, id))
            };
        });
    }
}

export const unfollowThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(toggleIsFollowedProgress(true, id))
        usersAPI.unfollow(id)
        .then(data => {
            if(data.resultCode === 0) {
                dispatch(unfollow(id))
                dispatch(toggleIsFollowedProgress(false, id))
            };
        });
    }
}

export default usersReducer;