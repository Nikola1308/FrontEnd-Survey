import React,{Component} from 'react'
//import axios from 'axios'


class SurvayList extends Component{
    
    
    render(){
        return(
            <div>
                <h4>{this.props.titleForNewSurvey}</h4>
                <button onClick={this.props.clicked}>Delete Survey</button>
                <button onClick={this.props.previewsurvey}>Preview Survey</button>
            </div>
        )
    }
}
export default SurvayList