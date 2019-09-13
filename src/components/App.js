import React from 'react'
//import SideBar from './SideBar/SideBar'
import {Route} from 'react-router-dom'
import axios from 'axios'
import SurveysPage from './AllSurveys/Surveys'
import NewSurvey from './NewSurvay/NewSurvey'
import SignIn from './SignIn/SignIn'
import './App.css'

axios.defaults.baseURL="http://localhost:3004"

const App = (props) =>{
    return(
        <div className="app">           
                 <Route exact path="/" component={SignIn}/>
                 <Route exact path="/surveyspage" component={SurveysPage}/>
                 <Route exact path="/newsurvey" component={NewSurvey}/>         
        </div>
    )
}

export default App