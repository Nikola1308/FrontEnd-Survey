import React,{Component} from 'react'
import Questions from '../Questions/Questions'

class InfoAboutNewSurvey extends Component{
    constructor(props){
        super(props)
        this.state = {
            surveyTitle:'',
            surveyDescription:'',
            questions :{
               
            }
        }
    }    
    handerSurveyTitle=(e)=>{
        this.setState({surveyTitle:e.target.value})
    }
    handlerSurveyDescription=(e)=>{
        this.setState({surveyDescription:e.target.value})
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
    handlerUpdateArrayWithAnwers=(anwersState,questionKey)=>{
        this.setState({
            questionKey:{
                ...this.state.questions,
                [questionKey]:{
                    ...this.state.questions[questionKey],
                    titleAnswer:anwersState.answerArray
                }
            }
        })
        console.log(anwersState.answerArray)
        console.log('.!.',{questionKey})
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
                                onAddAnswer={this.handlerUpdateArrayWithAnwers}/>
                    })
                }        
                </div>
                <div>
                     <button onClick={this.addNewQuestion} >Add Question</button>
                </div>
                <div>
                    <button>Submit Survey</button>
                </div>               
            </div>
        )
    }
}

export default InfoAboutNewSurvey