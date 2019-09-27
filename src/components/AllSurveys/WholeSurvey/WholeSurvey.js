import React,{Component} from 'react'
import SurveyQuestion from './QuestionsAndAnswers/SurveyQuestions'
import './WholeSurvey.css'

class WholeSurvey extends Component{    

    render(){
        return(
            <div className="modal">
            <div className="modal-survey">
                <div>
                    <h2>{this.props.surveyPrew.descriptionForNewSurvey}</h2>
                    <p>{this.props.surveyPrew.titleForNewSurvey}</p>
                    <SurveyQuestion previewsurvey={this.props.surveyPrew}/>
                </div>
                <button onClick={this.props.hideModal}>Close SurveyPreview</button>
            </div>
            </div>
        )
    }
}

export default WholeSurvey