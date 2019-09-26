import React,{Component} from 'react'
import SideBar from '../SideBar/SideBar'
import CreatingNewSurvey from './CreatingNewSurvey/CreatingNewSurvey'


class NewSurvey extends Component{
    render(){
        return(
            <div>
                <div>
                    <CreatingNewSurvey/>
                </div>
               <div>
                    <SideBar/>
               </div>
            </div>
        )
    }
}

export default NewSurvey