import React from 'react';
import s from './Users.module.css'
import * as axios from 'axios'

let standartPhoto = "https://visualpharm.com/assets/30/User-595b40b85ba036ed117da56f.svg"

class Users extends React.Component {

    componentDidMount () {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageSize}&count=${this.props.countSize}`).then(response => {
            this.props.setUsers(response.data.items)
            /* this.props.setUsersCount(response.data.totalCount) */
        })
    }

    onPageChanged = (numberPage) => {
        this.props.setCurrentPage(numberPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${this.props.countSize}`).then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render = () => {

        let countPage = Math.ceil (this.props.countSize / this.props.pageSize)

        let pages = []
        for (let i=1; i <= countPage; i++) {
            pages.push(i)
        }

        return <div>
            <div>
                {
                    pages.map(p => {
                        return <div className={s.pointer}><span className={this.props.currentPage === p && s.numberPage} onClick={(e) => {this.onPageChanged(p)} }>{p}</span></div>
                    })
                }
            </div>
        {   
            this.props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : standartPhoto} alt="photo" width={100}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={ () => {this.props.unfollow(u.id)}}>UnFollow</button> : <button onClick={ () => {this.props.follow(u.id)}}>Follow</button>}
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
}

export default Users;