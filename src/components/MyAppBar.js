import React from 'react';
import {NavLink} from 'react-router-dom';




class MyAppBar extends React.Component{
  render(){
      return(
          <div>             
            <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
              {/* Avatar image in top left corner */}
              <img src="img/am.png" alt="profil"  style={{width: '100%'}} />
              <a className="w3-bar-item w3-button w3-padding-large w3-hover-black" href="/"><NavLink activeClassName="current" to='/home'>
                <i className="fa fa-home w3-xxlarge" />
                </NavLink>
                <p>HOME</p>
                
              </a>
              <a className="w3-bar-item w3-button w3-padding-large w3-hover-black" href="/"><NavLink activeClassName="current" to='/about'>
                <i className="fa fa-user w3-xxlarge" />
                </NavLink>
                <p>ABOUT</p>
               
              </a>
              <a className="w3-bar-item w3-button w3-padding-large w3-hover-black" href="/"><NavLink activeClassName="current" to='/portfolio'>
                <i className="fa fa-eye w3-xxlarge" />
                </NavLink>
                <p>PORTFOLIO</p>
               
              </a>
              <a className="w3-bar-item w3-button w3-padding-large w3-hover-black" href="/"><NavLink activeClassName="current" to='/contact'>
                <i className="fa fa-envelope w3-xxlarge" />
                </NavLink>
                <p>CONTACT</p>
                </a>
               
            </nav>
            {/* Navbar on small screens (Hidden on medium and large screens) */}
            <div className="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
              <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
                <a href="#" className="w3-bar-item w3-button" style={{width: '25% !important'}}>HOME</a>
                <a href="#about" className="w3-bar-item w3-button" style={{width: '25% !important'}}>ABOUT</a>
                <a href="#photos" className="w3-bar-item w3-button" style={{width: '25% !important'}}>PHOTOS</a>
                <a href="#contact" className="w3-bar-item w3-button" style={{width: '25% !important'}}>CONTACT</a>
              </div>
            </div>
        </div>

         
      )
  }
}

export default MyAppBar;