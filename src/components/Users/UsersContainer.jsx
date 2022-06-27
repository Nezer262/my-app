import React from 'react';
import {connect} from 'react-redux'
import { follow, setCurrentPage, setUsers, setUsersCount, toggleIsFetching, unfollow } from '../../redux/users-reducer';
import Users from './Users';
import * as axios from 'axios'
import Preloader from '../common/Preloader';

class UsersContainer extends React.Component {

    componentDidMount () {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageSize}&count=${this.props.countSize}`).then(response => {
            this.props.setUsers(response.data.items)
            /* this.props.setUsersCount(response.data.totalCount) */
            this.props.toggleIsFetching(false)
        })
    }

    onPageChanged = (numberPage) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(numberPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${this.props.countSize}`).then(response => {
                this.props.setUsers(response.data.items)
                this.props.toggleIsFetching(false)
            })
    }

    render = () => {
        return <>
        { this.props.isFetching ? <Preloader/> : null } 
        <Users countSize={this.props.countSize} pageSize={this.props.pageSize} currentPage={this.props.currentPage} onPageChanged={this.onPageChanged} users={this.props.users}
        follow={this.props.follow} unfollow={this.props.unfollow}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        countSize: state.usersPage.countSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

/* let mapDispatchToProps =  (dispatch) => {
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
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingActionCreator(isFetching))
        }
    }
} */

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setUsersCount, toggleIsFetching})(UsersContainer);