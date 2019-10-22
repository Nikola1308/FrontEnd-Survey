import React,{Component} from 'react'

class AnswersModal extends Component{
    render(){
       
        let answers = this.props.previewanswers.answers;
        let answersArray = []
        if (answers === null || answers === undefined){
             console.log('ERROR Enter answers for question')  
        }else {
             answersArray = Object.keys(answers).map((answer)=>{
                if(typeof answers[answer] === 'object'){
                return answers[answer]
                }
           }) 
        }
        
        return(
            <div>
                <div>Answers: </div>
                <ul>
                    {answersArray.map((answerArray,index)=>{
                        return <li key={index}>{answerArray.titleAnswer}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default AnswersModal