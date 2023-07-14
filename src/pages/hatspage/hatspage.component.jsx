import React from 'react';
import './hatspage.style.scss';
import { withRouter } from 'react-router-dom'

const HatsPage = (props) => {
    console.log("🚀 ~ file: hatspage.component.jsx:6 ~ HatsPage ~ props:", props)
    return(
        <div>
            Hats Page
            <br />
            <br />
            <button onClick={()=>{props.history.push('/')}}>back to the futur</button>
        </div>
    )
} 
export default withRouter(HatsPage);