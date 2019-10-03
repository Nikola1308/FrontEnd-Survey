import React,{Component} from 'react'
import AnswersModal from './SureveyAnswersModal'

class QuestionsModal extends Component {
    render(){
       let questions = this.props.previewsurvey.questions
       
       let questionsArray =Object.keys(questions).map((key)=>{
            if(typeof questions[key]==='object')
            return questions[key]
        })
        return(
            <div>
                Questions:
                <div>
                    <ul>
                        {questionsArray.map((questionArray)=>{
                            return <li key={questionArray.id}>Question Title: {questionArray.title}
                            <AnswersModal previewanswers={questionArray}
                            previewanswerskey={questionArray.id}/>
                            </li>
                        })}    
                    </ul>
                </div>
            </div>
        )
    }
}

export default QuestionsModal