import React,{Component} from 'react'

class SurvayList extends Component{
   
    onClick2=(e)=>{
        this.props.previewsurvey()
        this.props.showModal()
    }
    
    
    render(){
        return(
            <div>
                <h4>{this.props.titleForNewSurvey}</h4>
                <button onClick={this.props.clicked}>Delete Survey</button>
                <button onClick={this.onClick2}>Preview Survey</button>
            </div>
        )
    }
}
export default SurvayList