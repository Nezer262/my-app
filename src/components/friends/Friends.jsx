import React from 'react';
import s from "./Friends.module.css"
import { NavLink } from 'react-router-dom';

const Friend = (props) => {
    return (
        <div className={s.item}>
            <div className={s.ava}><img src={props.ava} alt="ava" width={50}/></div>
            <NavLink className={s.name} to={"/friends+/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Friends = (props) => {

    let FriendElement = props.state.friends.friendsData.map(f => <Friend ava={f.ava} name={f.name} id={f.id}/>)

    return (
        <div className={s.wrapper}>
            <div className={s.title}>My Friends</div>
            <div className={s.list}>
                { FriendElement }
            </div>
        </div>
    )
}

export default Friends;