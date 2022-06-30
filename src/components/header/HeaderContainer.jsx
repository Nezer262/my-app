import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { setAuthUser } from '../../redux/auth-reducer'
import { connect } from 'react-redux';
import { usersAPI } from '../../api/api';

class HeaderContainer extends React.Component {
    componentDidMount() {
        usersAPI.authUser()
            .then(data => {
                if(data.resultCode === 0) {
                    let {id, email, login} = data.data
                    this.props.setAuthUser(id, email, login);
                }
            });
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {setAuthUser}) (HeaderContainer);