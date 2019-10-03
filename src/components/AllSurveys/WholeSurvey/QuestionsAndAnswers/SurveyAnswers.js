import React,{Component} from 'react'

class SurveyAnswer extends Component{
    render(){
        let answersArray = []
        if(this.props.previewsurveys._id === this.props.previewsurveyskey){
            answersArray=this.props.previewsurveys.answers.map((key)=>{
                return key.answerTitle
            })
        }     
        
        return(
            <div>
                <div>Answers: </div>
                <ul>
                    {answersArray.map((answerArray,index)=>{
                        return <li key={index}>{answerArray}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default SurveyAnswer