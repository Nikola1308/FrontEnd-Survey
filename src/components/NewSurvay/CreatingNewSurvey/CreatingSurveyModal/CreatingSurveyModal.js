import React,{Component} from 'react'
import '../../CreatingNewSurvey/CreatingNewSurvey.css'
import QuestionsModal from './SurveyQuestionModal'


class SurveyModal extends Component {
    render(){
        
        return(
            <div className="modal">
                <div className="modal-survey">
                    <h2>Preview Surevey</h2>
                    <h4>Survey Title: {this.props.wholesurvey.titleForNewSurvey}</h4>
                    <p>Surevey Description: {this.props.wholesurvey.descriptionForNewSurvey}</p>
                    <QuestionsModal previewsurvey={this.props.wholesurvey}/>
                    <button onClick={this.props.hideModal}>Edit Survey</button>
                    <button onClick={this.props.submitSurevey}>Submit</button>
                </div>
            </div>
        )
    }
}

export default SurveyModal