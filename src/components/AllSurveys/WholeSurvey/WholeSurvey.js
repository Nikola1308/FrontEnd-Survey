import React,{Component} from 'react'
import SurveyQuestion from './QuestionsAndAnswers/SurveyQuestions'

class WholeSurvey extends Component{
    constructor(props){
        super(props)
        console.log(this.props.surveyPrew)
    }
   
    
    render(){
        return(
            <div>
                <h2>{this.props.surveyPrew.descriptionForNewSurvey}</h2>
                <p>{this.props.surveyPrew.descriptionForNewSurvey}</p>
                <SurveyQuestion previewsurvey={this.props.surveyPrew}/>
            </div>
        )
    }
}

export default WholeSurvey