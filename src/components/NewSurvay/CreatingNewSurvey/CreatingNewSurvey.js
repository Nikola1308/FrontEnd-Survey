import React,{Component} from 'react'
import axios from 'axios'
import Questions from '../Questions/Questions'
import {withRouter} from 'react-router-dom';
import jwtDecode from 'jwt-decode'

import SurveyModal from './CreatingSurveyModal/CreatingSurveyModal'


class CreatingNewSurvey extends Component{
    constructor(props){
        super(props)
        this.state = {
            user:null,
            titleForNewSurvey:'',
            descriptionForNewSurvey:'',
            questions :{
               
            },
            modal:false
        }
    } 
    componentDidMount(){
       this.halnderforUpdatingmail()
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
    halnderforUpdatingmail = () => {
        let decode = jwtDecode(localStorage.getItem('JWT_TOKEN'))
        this.setState({user:decode.email})
    }
    
    hanleSubmit = (e)=>{
        e.preventDefault()
        const newSurvay = {
            survay:this.state
        }
        axios.post('/survey/wholenewsurvey/',{newSurvay})
        .then(res=>{
            this.props.history.push('/surveyspage')            
        })
        
    }

    addNewQuestion=(e)=>{
        e.preventDefault()
        let randomKey = Math.random()
        let newQuestionArr = {...this.state.questions,...{[randomKey]:{id:randomKey,title : ''}}}
        this.setState({questions:newQuestionArr})
    }
    showModal=()=>{
        this.setState({modal:true})
    }
    hideModal=()=>{
        this.setState({modal:false})
    }
   
    removeQuestion = (deleteQuestionIndex) =>{
        let clone = {...this.state.questions}
        delete clone[deleteQuestionIndex]
        let newClone={...clone}
        this.setState({questions:newClone})
       
    }
    
    render(){   
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
                    Object.keys(this.state.questions).map((questionKey,index)=>{
                                              
                        return  <Questions
                                // question={this.state.questions[questionKey]}
                                key={index}
                                keyOfQuestion={questionKey}
                                onChangeInput={this.handlerUpdateArray} 
                                onAddAnswer={this.handlerUpdateArrayWithAnwers}
                                deleteQuestion={this.removeQuestion}
                                questionTitle = {this.state.questions[questionKey].title || ''}
                                questionAnswer={(this.state.questions[questionKey].answers && this.state.questions[questionKey].answers) || {}}
                                />
                    })
                }        
                </div>
                <div>
                     <button onClick={this.addNewQuestion}>Add Question</button>
                </div> 
                <div>
                   <button onClick={this.showModal}>Continue</button> 
                   {
                      this.state.modal && <SurveyModal 
                      wholesurvey={this.state} 
                      hideModal={this.hideModal}
                      submitSurevey={this.hanleSubmit}/>
                   }
                   
                </div>             
            </div>
        )
    }
}


export default withRouter(CreatingNewSurvey)