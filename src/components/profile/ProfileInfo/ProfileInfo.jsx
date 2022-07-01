import React from 'react';
import { Navigate } from 'react-router-dom';
import Preloader from '../../common/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    if(!props.isAuth) return <Navigate to={"/login/"}/>    
    return (

        <div>
            <div>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <div>{props.profile.fullName}</div>
            </div>
        </div>
    )
}

export default ProfileInfo;