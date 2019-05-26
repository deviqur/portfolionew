import React from 'react';


class Home extends React.Component{
    render(){
        return(
            <div className="w3-padding-large" id="main">
                <header className="w3-container w3-padding-32 w3-center w3-black" id="home">
                <h1 className="w3-jumbo"><span className="w3-hide-small">I'm</span> Devi Qurnia Sari.</h1>
                <p>Beck End Developer and Engineer</p>
                <img src="img/iam.png" alt="boy" className="w3-image" width={992} height={1108} />
                </header>

            </div>
        )
    }
}

export default Home;