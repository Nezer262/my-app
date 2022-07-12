import React from 'react';
import {connect} from 'react-redux'
import Profile from './Profile';
import { getUserProfile, setStatus, updateStatus } from '../../redux/profile-reducer';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if(!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
        this.props.setStatus(userId)
    }

    render() {
        return (
           <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});
export default compose (
    connect(mapStateToProps, { getUserProfile, setStatus, updateStatus}),
    withRouter,
    /* withAuthRedirect */
)(ProfileContainer)

/* let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let WithUrlContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {setUserProfile, getUserProfile})(WithUrlContainerComponent); */