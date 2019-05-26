import React, {Component} from 'react';

class About extends React.Component{
    render(){
        return(
            <div className="w3-padding-large" id="main"> 
                <div className="w3-content w3-justify w3-text-grey w3-padding-64" id="about">
                <h2 className="w3-text-light-grey">My Name Devi Qurnia Sari</h2>
                <hr style={{width: '200px'}} className="w3-opacity" />
                <p>I was born in Lampung, 10 December 1998. Now i am student of Computer Science and Information System in Universitas Gadjah Mada science 2017 . I come from Tangerang. I studied at SDN Poris Plawad 3, SMPN 7 Tangerang, and SMKN 3 Tangerang.
                </p>
                <h3 className="w3-padding-16 w3-text-light-grey">My Skills</h3>
                <p className="w3-wide">Laravel</p>
                <div className="w3-white">
                    <div className="w3-dark-grey" style={{height: '28px', width: '85%'}} />
                </div>
                <p className="w3-wide">Web Design</p>
                <div className="w3-white">
                    <div className="w3-dark-grey" style={{height: '28px', width: '85%'}} />
                </div>
                <p className="w3-wide">CIsco</p>
                <div className="w3-white">
                    <div className="w3-dark-grey" style={{height: '28px', width: '90%'}} />
                </div><br />
                <div className="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
                    <div className="w3-quarter w3-section">
                    <span className="w3-xlarge">11+</span><br />
                    Partners
                    </div>
                    <div className="w3-quarter w3-section">
                    <span className="w3-xlarge">20+</span><br />
                    Projects Done
                    </div>
                    <div className="w3-quarter w3-section">
                    <span className="w3-xlarge">40+</span><br />
                    Happy Clients
                    </div>
                    <div className="w3-quarter w3-section">
                    <span className="w3-xlarge">150+</span><br />
                    Meetings
                    </div>
                </div>
                <button className="w3-button w3-light-grey w3-padding-large w3-section">
                    <i className="fa fa-download" /> Download Resume
                </button>
                </div>
            </div>
        )
    }
}

export default About;