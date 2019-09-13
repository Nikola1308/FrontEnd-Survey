import React,{Component} from 'react'
//import {reduxForm,Field} from 'redux-form'
import {connect} from 'react-redux'
import {compose} from 'redux'
import GoogleLogin from 'react-google-login'

import * as actions from '../../actions'
import './Signin.css'

class SignIn extends Component{
    constructor(props){
        super(props)
        this.responseGoogle = this.responseGoogle.bind(this)
    }
   
    async responseGoogle(res){        
        await this.props.oauthGoogle(res.accessToken)
        this.props.history.push('/surveyspage')
    }
    render(){
        return(
            <div className="signin-container">
                <div className="signin-main">
                    <div>
                         <h3>Welcome To Survey</h3>
                    </div>
                    <div>
                        <GoogleLogin
                            clientId="679948799018-5u26v86nvio9eqpsmfq6drgf1b88lug3.apps.googleusercontent.com"
                            buttonText="Login With Google Account"
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                            cookiePolicy={'single_host_origin'}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default compose(
    connect(null, actions),
)(SignIn)