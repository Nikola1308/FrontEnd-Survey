import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import SideBar from '../SideBar/SideBar'
import SurveyList from './SurveyList/SurveyList'
import WholeSurvey from './WholeSurvey/WholeSurvey'

class SurvayPage extends Component{
    state = {
        surveyList:[],
        isPrewSelected:false,
        surveyPrew:null
    }
    componentDidMount(){
        axios.get('/surveys')
        .then(response=>{          
            this.setState({surveyList:response.data})         
        })
        
    }
    postClickedHandler=(id)=>{
            axios.delete('/surveys/'+id)
            .then(response=>{
        })   
       this.setState({surveyList:this.state.surveyList.filter((survey)=>{
            return survey._id !== id
        })})
        
      }
    previewsurveyHandler=(id)=>{
            axios.get('/surveys/'+id)
            .then(response=>{
                if (response.data._id === id){
                    this.setState({isPrewSelected:true,surveyPrew:response.data})
                }
            })
    }
    
    render(){
        let titles = []
        if (this.state.surveyList.length > 0){
             titles =  this.state.surveyList.map((key,index)=>{
               return <SurveyList 
               titleForNewSurvey={key.titleForNewSurvey} 
               key={index}
               clicked={()=>this.postClickedHandler(key._id)}
               previewsurvey={()=>{this.previewsurveyHandler(key._id)}}/>
            })
           
        }
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
                {titles}            
               {this.state.isPrewSelected && <WholeSurvey surveyPrew={this.state.surveyPrew}/>} 
            </div>
        </div>
        )
    } 
}

export default SurvayPage



