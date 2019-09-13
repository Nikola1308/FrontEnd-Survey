import React,{Component} from 'react'
import SideBar from '../SideBar/SideBar'
import InfoAboutNewSurvey from './InfoAboutNewSurvey/InfoAboutNewSurvey'


class NewSurvey extends Component{
    render(){
        return(
            <div>
                <div>
                    <InfoAboutNewSurvey/>
                </div>
               <div>
                    <SideBar/>
               </div>
            </div>
        )
    }
}

export default NewSurvey