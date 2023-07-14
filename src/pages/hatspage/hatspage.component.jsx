import React from 'react';
import './hatspage.style.scss';
import { withRouter } from 'react-router-dom'

const HatsPage = (props) => {
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