import React,{Component} from 'react'
import Answer from '../NewAnswers/NewAnswers'

class Question extends Component{  
    constructor(props){
        super(props)
        this.state = {
            questionTitle:this.props.questionTitle || '',
            answerArray:{
                
            }
        }
    } 
    componentDidUpdate(prevProps){
        if(prevProps.questionTitle !== this.props.questionTitle){
            this.setState({questionTitle:this.props.questionTitle,answerArray:this.props.questionAnswer})
        }
    }
    handlerQuestionTittle=(e)=>{    
        e.preventDefault()  
        this.setState({questionTitle:e.target.value})
        this.props.onChangeInput(this.props.keyOfQuestion,e.target.value)           
    }
    //Adding new answer
    addNewAnswer=()=>{
        let randomKeyForAnswer = Math.random()
        let newAnswerArr={...this.state.answerArray,[randomKeyForAnswer]:{titleAnswer: ''}}
        this.setState({answerArray:newAnswerArr})   
    }

    //Deleting Answer    
    removeAnswer = (deleteAnswerIndex) => {
        let clone = {...this.state.answerArray};
        delete clone[deleteAnswerIndex]
        this.props.onAddAnswer({...this.state,answerArray : clone},this.props.keyOfQuestion)
        this.setState({answerArray : clone});
    }

    handlerUpdateAnswerArray=(questionKeys,answerTitle)=>{
        const newAnswers = {
            ...this.state.answerArray,
            [questionKeys]:{
                ...this.state.answerArray[questionKeys],
                titleAnswer:answerTitle
            }
        }
        this.props.onAddAnswer({...this.state, answerArray: newAnswers},this.props.keyOfQuestion)
        this.setState({
            answerArray: newAnswers
        })  
    }   

    render(){
        return(
            <div>
                <div>
                <h4>Question Title:
                    <input type="text"
                     value={this.state.questionTitle} 
                     onChange={(e)=>this.handlerQuestionTittle(e)}/>
                </h4> 
                <button onClick={(e) => { e.preventDefault(); this.props.deleteQuestion(this.props.keyOfQuestion) }}>Delete Question X</button>  
                </div>  
                <button onClick={this.addNewAnswer}>Add Answer</button>
               {
                   Object.keys(this.state.answerArray).map((answerId,index) => {
                   return   <Answer 
                            key={index}
                            answerTitle={this.state.answerArray[answerId].titleAnswer || ''}
                            answerId={answerId}
                            keyOfItemQuestion={answerId}
                            onChangeInputAnswer={this.handlerUpdateAnswerArray}
                            answerArray={this.state.answerArray}
                            removeAnswer={this.removeAnswer}/>
                   })
                }
               {/* <Answer answerArray={this.state.answerArray}/> */}
            </div>
        )
    }
}

export default Question