import React from 'react';
import { Navigate } from 'react-router-dom';
import Preloader from '../../common/Preloader';
import ProfileStatus from '../ProfileStatus/ProfileStatus';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <div>{props.profile.fullName}</div>
                <ProfileStatus status={props.status} />
            </div>
        </div>
    )
}

export default ProfileInfo;