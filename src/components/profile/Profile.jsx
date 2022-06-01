import React from 'react';
import s from './Profile.module.css';
import MyPosts from './posts/MyPosts'

const Profile = (props) => {

    return (
        <div className={s.profile}>
          <div className={s.profile__info}>
            <img src="https://avatarko.ru/img/kartinka/14/sport_snowboard_13261.jpg" alt="" />
            <div className={s.text}>
              <div className={s.name}>Andrey Y.</div>
              <div className={s.birth}>Data of Birth: 25 april</div>
              <div className={s.city}>City: Kazan</div>
              <div className={s.choto}></div>
            </div>
          </div>
          <MyPosts state={props.state} dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;