import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Users.module.css'
import * as axios from 'axios'
import { usersAPI } from '../../api/api';

let standartPhoto = "https://visualpharm.com/assets/30/User-595b40b85ba036ed117da56f.svg"

let Users = (props) => {

        let countPage = Math.ceil (props.countSize / props.pageSize)

        let pages = []
        for (let i=1; i <= countPage; i++) {
            pages.push(i)
        }

        return <div>
            <div>
                {
                    pages.map(p => {
                        return <div className={s.pointer}><span className={props.currentPage === p && s.numberPage} onClick={(e) => {props.onPageChanged(p)} }>{p}</span></div>
                    })
                }
            </div>
        {   
            props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={"/profile/" + u.id}><img src={u.photos.small != null ? u.photos.small : standartPhoto} alt="photo" width={100}/></NavLink>
                    </div>
                    <div>
                        {u.followed ? 
                        <button onClick={ () => {
                            usersAPI.unfollow(u.id)
                            .then(data => {
                                if(data.resultCode === 0) {
                                    props.unfollow(u.id)
                                };
                            });
                        }}>UnFollow</button> : 
                        <button onClick={ () => {
                            usersAPI.follow(u.id)
                            .then(data => {
                                if(data.resultCode === 0) {
                                    props.follow(u.id)
                                };
                            });
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                </span>
            </div>)
        }
    </div>
}

export default Users;