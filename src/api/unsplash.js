import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID cMVkkdLl5ycOYcZ57ph0fmZUK-HjbAmZompdHioO5iM'
    }
})