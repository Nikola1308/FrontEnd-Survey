import React,{Component} from 'react'
import './SurveyList.css'

class SurvayList extends Component{

    state = {
        hover:false
    }
   
    onClick2=(e)=>{
        this.props.previewsurvey()
        this.props.showModal()
    }
    mouseOver=()=> {
        this.setState({hover: true});
    }

    mouseOut=()=> {
        this.setState({hover: false});
    }
    
    render(){
        let linkStyle = null;
            if (this.state.hover) {
                linkStyle = {color: 'black',cursor: "pointer"}
            } else {
                linkStyle = {color: '#afadad'}
            }
        return(
            <div className="surveyList">
                <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end"}}>
                        <button onClick={this.props.clicked} style={linkStyle}
                        onMouseEnter={this.mouseOver} onMouseLeave={this.mouseOut}
                        className="buttondelete"
                        ><i className="fas fa-trash"></i></button>
                    </div>
                <h4 style={{display:"flex",alignItems:"center"}}>{this.props.titleForNewSurvey}</h4>
                <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
                    <button onClick={this.onClick2} className="buttoneye">
                        <i className="far fa-eye coloreye"></i>
                    </button>
                </div>
            </div>
        )
    }
}
export default SurvayList