import React from 'react';



class Portfolio extends React.Component{
    render(){
        return(
            <div className="w3-padding-large" id="main">
               {/* Portfolio Section */}
                <div className="w3-padding-64 w3-content" id="photos">
                <h2 className="w3-text-light-grey">My Portfolio</h2>
                <hr style={{width: '200px'}} className="w3-opacity" />
                {/* Grid for photos */}
                <div className="w3-row-padding" style={{margin: '0 -16px'}}>
                    <div className="w3-half">
                    <img src="img/pt1.png" alt="portfolio1" style={{width: '100%'}} />
                    <img src="img/andro.png"  alt="portfolio2" style={{width: '100%'}} />
                    <img src="img/dday.png"  alt="portfolio3" style={{width: '100%'}} />
                    </div>
                    <div className="w3-half">
                    <img src="img/ux.png"  alt="portfolio4" style={{width: '100%'}} />
                    <img src="img/chef1.png" alt="portfolio6" style={{width: '100%'}} />
                    <img src="img/css.png" alt="portfolio7" style={{width: '100%'}} />
                    <img src="img/p6.png"  alt="portfolio8"  style={{width: '100%'}} />
                    </div>
                    {/* End photo grid */}
                </div>
                {/* End Portfolio Section */}
                </div>

            </div>
            
        )
    }
}

export default Portfolio;