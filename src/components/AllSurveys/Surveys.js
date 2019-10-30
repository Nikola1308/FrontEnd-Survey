import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import SideBar from '../SideBar/SideBar'
import SurveyList from './SurveyList/SurveyList'
import WholeSurvey from './WholeSurvey/WholeSurvey'

import './Surveys.css'
import '../SideBar/SideBar.css'



class SurvayPage extends Component{
    state = {
        surveyList:[],
        isPrewSelected:false,
        surveyPrew:null,
        displaySurveyModal:false
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
    showModal = () =>{
        this.setState({displaySurveyModal:true})
    }
    hideModal = () =>{
        this.setState({displaySurveyModal:false,isPrewSelected:false})
    }
    
    render(){
        let titles = []
        if (this.state.surveyList.length > 0){
             titles =  this.state.surveyList.map((key,index)=>{
               return <SurveyList 
               titleForNewSurvey={key.titleForNewSurvey} 
               key={index}
               clicked={()=>this.postClickedHandler(key._id)}
               previewsurvey={()=>{this.previewsurveyHandler(key._id)}}
               showModal={this.showModal}/>
            })
           
        }
        return(
        <div className="surveyCointainer">
            <div style={{width:"15%",textAlign:'center'}}>
                <div style={{width:"100%",height:"100%"}}>
                    <SideBar />
                </div>
            </div>
            <div className="surveyContainerSurveys">
                <div>
                    <h4>Welcome to Survays</h4>
                    <Link to="/newsurvey">Create new Survay</Link>                
                </div>
                <div className="surveyContainerAllSurveys">
                    <div style={{textAlign:"center"}}>
                         <h2>All Surveys</h2> 
                    </div>
                    <div className="surveyContainerForOneSurvey">
                        {titles}            
                        {this.state.isPrewSelected &&
                        <WholeSurvey surveyPrew={this.state.surveyPrew} 
                        hideModal={this.hideModal}/>} 
                    </div>
                </div>
            </div>
        </div>
        )
    } 
}

export default SurvayPage



