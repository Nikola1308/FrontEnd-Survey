import React,{Component} from 'react'
import SideBar from '../SideBar/SideBar'
import CreatingNewSurvey from './CreatingNewSurvey/CreatingNewSurvey'
import './NewSurvey.css'


class NewSurvey extends Component{
    render(){
        return(
            <div className="newSurvey">
               <div>
                    <SideBar/>
               </div>
               <div>
                    <CreatingNewSurvey/>
                </div>
            </div>
        )
    }
}

export default NewSurvey