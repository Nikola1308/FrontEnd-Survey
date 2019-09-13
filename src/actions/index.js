import axios from 'axios'
import {AUTH_SIGN_UP} from './types'

export const oauthGoogle = data => {
    return async dispatch => {
       const res =  await axios.post('http://localhost:3004/survey/oauth/google',{
            access_token: data
        })
        dispatch({
            type:AUTH_SIGN_UP,
            payload:res.data.token
        });
        localStorage.setItem('JWT_TOKEN',res.data.token)
    }
}

