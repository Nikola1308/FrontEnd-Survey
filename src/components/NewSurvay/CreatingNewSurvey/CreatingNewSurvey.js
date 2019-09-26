import React,{Component} from 'react'
import axios from 'axios'
import Questions from '../Questions/Questions'


class CreatingNewSurvey extends Component{
    constructor(props){
        super(props)
        this.state = {
            titleForNewSurvey:'',
            descriptionForNewSurvey:'',
            questions :{
               
            }
        }
    }  
    handerSurveyTitle=(e)=>{
        this.setState({titleForNewSurvey:e.target.value})
    }
    handlerSurveyDescription=(e)=>{
        this.setState({descriptionForNewSurvey:e.target.value})
    }
    handlerUpdateArray=(questionKey,questionTitle)=>{     
         this.setState({
            questions : {
                ...this.state.questions,
                [questionKey] : {
                   ...this.state.questions[questionKey],
                   title : questionTitle
                }
            }
        })
    }
    handlerUpdateArrayWithAnwers=(anwersState,questionKeys)=>{
        this.setState({
            questions:{
                ...this.state.questions,
                [questionKeys]:{
                    ...this.state.questions[questionKeys],
                    answers:anwersState.answerArray
                }
            }
        })
    }
    hanleSubmit = (e)=>{
        e.preventDefault()
        const newSurvay = {
            survay:this.state
        }
        axios.post('/survey/wholenewsurvey/',{newSurvay})
        .then(res=>{
            console.log(res.data)
        })
        console.log(newSurvay)

    }

    addNewQuestion=(e)=>{
        e.preventDefault()
        let randomKey = Math.random()
        let newQuestionArr = {...this.state.questions,...{[randomKey]:{id:randomKey,title : ''}}}
        this.setState({questions:newQuestionArr})
    }
    
    render(){
        console.log(this.state)
        return(
            <div>
                <div>
                    <label>
                        Title for Survey:
                    <input onChange={this.handerSurveyTitle} value={this.state.surveyTitle}/>
                    </label>
                    <label>
                        Description:
                    <textarea onChange={this.handlerSurveyDescription} value={this.state.surveyDescription}/>
                    </label>
                </div>
                <div>
                    {
                    Object.keys(this.state.questions).map((item,key)=>{                       
                        return  <Questions
                                key={key}
                                keyOfQuestion={item}
                                onChangeInput={this.handlerUpdateArray} 
                                onAddAnswer={this.handlerUpdateArrayWithAnwers}
                                />
                    })
                }        
                </div>
                <div>
                     <button onClick={this.addNewQuestion} >Add Question</button>
                </div>
                <div>
                    <button onClick={this.hanleSubmit}>Submit Survey</button>
                </div>               
            </div>
        )
    }
}


export default CreatingNewSurvey