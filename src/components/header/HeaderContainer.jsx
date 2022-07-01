import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { setAuthUser, getAuthUser } from '../../redux/auth-reducer'
import { connect } from 'react-redux';
import { usersAPI } from '../../api/api';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUser()
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {setAuthUser, getAuthUser}) (HeaderContainer);