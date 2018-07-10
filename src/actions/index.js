import axios from 'axios';

export const loginInfo = response => ({
    type: 'LOGIN',
    fullname: response.name,
    email: response.email,
    avatar: response.picture.data.url,
    islogged: true
});