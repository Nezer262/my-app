import * as axios from 'axios'

const instance = axios.create ({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "d1a1058e-807c-471f-8c27-e088c28cdac4"
    }
})

export const usersAPI = {
    getUsers(pageSize = 1, countSize = 10) {
        return instance.get(`users?page=${pageSize}&count=${countSize}`).then(response => response.data)
    },
    authUser() {
        return instance.get(`auth/me`).then(response => response.data)
    },
    follow(id) {
        return instance.post(`follow/${id}`).then(response => response.data)
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    },
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
    }
}

export const profileAPI = {
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status });
    }
}