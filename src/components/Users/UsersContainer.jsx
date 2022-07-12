import React from 'react';
import {connect} from 'react-redux'
import { follow, setCurrentPage, setUsers, setUsersCount, toggleIsFetching, unfollow, toggleIsFollowedProgress, getUserPageThunkCreator, getUserActiveThunkCreator,
    followThunkCreator, unfollowThunkCreator  } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getCountSize, getCurrentPage, getIsFetching, getIsFollowedProgress, getPageSize, getUsers } from '../../redux/users-selectors';

class UsersContainer extends React.Component {

    componentDidMount () {
        this.props.getUserPageThunkCreator(this.props.pageSize, this.props.countSize)
    }

    onPageChanged = (numberPage) => {
        this.props.getUserActiveThunkCreator(numberPage, this.props.countSize)
    }

    render = () => {
        return <>
        { this.props.isFetching ? <Preloader/> : null } 
        <Users countSize={this.props.countSize} pageSize={this.props.pageSize} currentPage={this.props.currentPage} onPageChanged={this.onPageChanged} users={this.props.users}
        follow={this.props.follow} unfollow={this.props.unfollow} isFollowedProgress={this.props.isFollowedProgress} toggleIsFollowedProgress={this.props.toggleIsFollowedProgress}
        followThunkCreator={this.props.followThunkCreator} unfollowThunkCreator={this.props.unfollowThunkCreator}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        countSize: getCountSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowedProgress: getIsFollowedProgress(state)
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

export default compose(
    connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setUsersCount,
        toggleIsFetching, toggleIsFollowedProgress, getUserPageThunkCreator, getUserActiveThunkCreator,
        followThunkCreator, unfollowThunkCreator}),
    withAuthRedirect
)(UsersContainer)

/* let AuthRedirectComponent = withAuthRedirect(UsersContainer)

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setUsersCount,
     toggleIsFetching, toggleIsFollowedProgress, getUserPageThunkCreator, getUserActiveThunkCreator,
     followThunkCreator, unfollowThunkCreator})(AuthRedirectComponent); */