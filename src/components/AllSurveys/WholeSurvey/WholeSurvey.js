import React,{Component} from 'react'
import SurveyQuestion from './QuestionsAndAnswers/SurveyQuestions'
import './WholeSurvey.css'

class WholeSurvey extends Component{    

    render(){
        return(
            <div className="modal">
            <div className="modal-survey">
                <div>
                    <h2>Title For Survey: {this.props.surveyPrew.titleForNewSurvey}</h2>
                    <p>Description For Survey: {this.props.surveyPrew.descriptionForNewSurvey}</p>
                    <SurveyQuestion previewsurvey={this.props.surveyPrew}/>
                </div>
                <button onClick={this.props.hideModal}>Close SurveyPreview</button>
            </div>
            </div>
        )
    }
}

export default WholeSurvey