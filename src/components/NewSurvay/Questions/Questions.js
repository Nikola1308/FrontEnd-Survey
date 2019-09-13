import React,{Component} from 'react'
import Answer from '../NewAnswers/NewAnswers'

class Question extends Component{  
    constructor(props){
        super(props)
        this.state = {
            questionTitle:'',
            answerArray:{
                
            }
        }
    } 
   
    handlerQuestionTittle=(e)=>{    
        e.preventDefault()  
        this.setState({questionTitle:e.target.value})
        this.props.onChangeInput(this.props.keyOfQuestion,e.target.value)    
            
    }

    handlerUpdateAnswerArray=(questionKeys,answerTitle)=>{
       // console.log(answerTitle)
        this.setState({
            answerArray:{
                ...this.state.answerArray,
                [questionKeys]:{
                    ...this.state.answerArray[questionKeys],
                    titleAnswer:answerTitle
                }
            }
            
        })
        this.props.onAddAnswer(this.state,this.props.keyOfQuestion)
        
    }   
    addNewAnswer=()=>{
        let randomKeyForAnswer = Math.random()
        let newAnswerArr={...this.state.answerArray,...{[randomKeyForAnswer]:{titleAnswer: ''}}}
        this.setState({answerArray:newAnswerArr})
        
    }

    render(){
     // console.log(this.state)
        return(
            <div>
                <div>
               <h4>Question Title:
                    <input type="text"
                     value={this.state.questionTitle} 
                     onChange={(e)=>this.handlerQuestionTittle(e)}/>
                </h4> 
               <button>Delete Question X</button>  
               </div>  
               <button onClick={this.addNewAnswer}>Add Answer</button>
               {
                   Object.keys(this.state.answerArray).map((item,key) => {
                   return   <Answer 
                            key={key}
                            keyOfItemQuestion={item}
                            onChangeInputAnswer={this.handlerUpdateAnswerArray}/>
                   })
                }
               {/* <Answer answerArray={this.state.answerArray}/> */}
            </div>
        )
    }
}

export default Question