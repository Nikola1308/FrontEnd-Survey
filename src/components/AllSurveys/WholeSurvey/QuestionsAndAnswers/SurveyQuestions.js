import React,{Component} from 'react'
import SurveyAnswer from './SurveyAnswers'

class SurveyQuestion extends Component{

    render(){
        let questionsArray = []
        questionsArray = this.props.previewsurvey.questions.map((key)=>{
            return key
        })
        return(
            <div>
                <div>
                Questions :
                    <ul>
                        {questionsArray.map((questionArray)=>{
                            return <li key={questionArray._id}>{questionArray.questionTitle}
                            <SurveyAnswer previewsurveys={questionArray}
                            previewsurveyskey={questionArray._id}/>
                            </li>
                        })}
                    </ul>
                
                </div>
            </div>
        )
    }
}

export default SurveyQuestion