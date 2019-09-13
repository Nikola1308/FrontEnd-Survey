import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import * as actions from '../../actions'
//import SignIn from './SignIn'

class SideBar extends Component{
    render(){
        return(
            <div>
                 <ul>                
                   <Link to="/surveyspage">Survays</Link>
                    <li>
                        Profile
                    </li>
                    <li>
                        Settings
                    </li>         
                    <Link to="/">Log Out</Link>              
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        isAuth: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps,actions)(SideBar)