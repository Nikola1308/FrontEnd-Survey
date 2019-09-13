import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import SideBar from '../SideBar/SideBar'
import SurveyList from './SurveyList/SurveyList'

class SurvayPage extends Component{
    state = {
        surveyList:[]
    }
    componentDidMount(){
        axios.get('/surveys')
        .then(response=>{
            this.setState({surveyList:response.data})
            console.log(response.data)
        })
    }
    
    postClickedHandler=(id)=>{
            axios.delete('/surveys/'+id)
            .then(response=>{
               console.log(response)
        })   
       this.setState({surveyList:this.state.surveyList.filter((survey)=>{
            return survey._id !== id
        })})
        
      }
    
    render(){
        
        const surveyLists = this.state.surveyList.map(survey =>{            
            return <SurveyList 
            titleForNewSurvey={survey.titleForNewSurvey} 
            key={survey._id}
            clicked={(_id)=>this.postClickedHandler(survey._id)}/>
        })
        return(
        <div>
            <div>
                <Link to="/newsurvey">Create new Survay</Link>                
            </div>
            <div>
                Welcome to Survays
                <SideBar/>
            </div>
            <div>
                <h2>All Surveys</h2>
                {surveyLists}
            </div>
        </div>
        )
    }
}

export default SurvayPage



