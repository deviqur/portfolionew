import React from 'react';


class Contact extends React.Component{
    render(){
        return(
            <div className="w3-padding-large" id="main">
                {/* Contact Section */}
                <div className="w3-padding-64 w3-content w3-text-grey" id="contact">
                <h2 className="w3-text-light-grey">Contact Me</h2>
                <hr style={{width: '200px'}} className="w3-opacity" />
                <div className="w3-section">
                    <p><i className="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right" /> Tangerang, Indonesia</p>
                    <p><i className="fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right" /> Phone: +628 85916822164</p>
                    <p><i className="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right"> </i> Email: deviqurnia10@gmail.com</p>
                </div><br />
                <p>Lets get call me. Send me a message:</p>
                <form action="/action_page.php" target="_blank">
                    <p><input className="w3-input w3-padding-16" type="text" placeholder="Name" required name="Name" aria-label="name"/></p>
                    <p><input className="w3-input w3-padding-16" type="text" placeholder="Email" required name="Email" aria-label="email"/></p>
                    <p><input className="w3-input w3-padding-16" type="text" placeholder="Message" required name="Message" aria-label="message"/></p>
                    <p>
                    <button className="w3-button w3-light-grey w3-padding-large" type="submit">
                        <i className="fa fa-paper-plane" /> SEND MESSAGE
                    </button>
                    </p>
                </form>
                {/* End Contact Section */}
                </div>

            </div>
        )
    }
}

export default Contact;