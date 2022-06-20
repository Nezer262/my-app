import React from 'react';
import {connect} from 'react-redux'
import { followActionCreator, setCurrentPageActionCreator, setUsersActionCreator, setUsersCountActionCreator, unfollowActionCreator } from '../../redux/users-reducer';
import Users from './Users';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        countSize: state.usersPage.countSize,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps =  (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followActionCreator(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollowActionCreator(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage: (numberPage) => {
            dispatch(setCurrentPageActionCreator(numberPage))
        },
        setUsersCount: (totalCount) => {
            dispatch(setUsersCountActionCreator(totalCount))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;