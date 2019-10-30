import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import * as actions from '../../actions'
import './SideBar.css'
//import SignIn from './SignIn'

class SideBar extends Component{
    render(){
        return(
            <div className="sidebar">
                 <ul className="ulSideBarStyle">      
                    <div className="firstpartsidebar">         
                        <Link to="/surveyspage" className="linkstylesidebar">Survays</Link>
                        <Link to="" className="linkstylesidebar" >Profile</Link>
                        <Link to="" className="linkstylesidebar">Settings</Link> 
                    </div> 
                    <div className="secondpratsidebar">
                        <Link to="/" className="linkstylesidebar">Log Out</Link>
                    </div>               
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