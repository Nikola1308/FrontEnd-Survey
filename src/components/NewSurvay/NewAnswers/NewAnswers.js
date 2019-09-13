import React,{Component}from 'react'


class Answer extends Component{

    state = { 
        answerTitle: ''
    }

    handleAnswerTitle=(e)=>{
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
                    <button>X</button>
                </form>
            </div>
        )
    }
}

export default Answer