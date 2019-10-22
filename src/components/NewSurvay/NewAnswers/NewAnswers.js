import React,{Component}from 'react'


class Answer extends Component{

    constructor(props) {
        super(props);

        this.state = { 
            answerTitle: this.props.answerTitle || ''
        }
    }

    componentDidUpdate(prevProps) {
        if(prevProps.answerTitle !== this.props.answerTitle) {
            this.setState({answerTitle: this.props.answerTitle})
        }   
    }
    handleAnswerTitle=(e)=>{
        e.preventDefault()  
        this.setState({answerTitle:e.target.value})
        this.props.onChangeInputAnswer(this.props.keyOfItemQuestion,e.target.value)
    }
    
    render(){
        return(
            <div>
                <form>
                    <input type="checkbox"/>
                    <input 
                        type="text"
                        placeholder={"Enter Answer"}
                        value={this.state.answerTitle}
                        onChange={this.handleAnswerTitle}                        
                    />
                    <button onClick={(e) => { e.preventDefault(); this.props.removeAnswer(this.props.answerId) }}>X</button>
                </form>
            </div>
        )
    }
}

export default Answer