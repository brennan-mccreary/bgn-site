import React from "react";
import bgn_logo from '../../BGN-Logo.png'

const Construction = () => {
    return(
        <div className="bg-slate-900">
            <header className="App-header">
                <img src={bgn_logo} className="App-logo" alt="logo" />
                <p>We are currently under construction...</p>
                <p>Keep an eye out for our shiny new website coming soon!</p>
            </header>
        </div>
    )
}

export default Construction;