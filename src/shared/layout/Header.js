import React from 'react';
import PropTypes from 'prop-types';
import logo from '../images/logo.svg';
import{ Link } from 'react-router-dom';

const Header = (props) => {

const {title, url} = props;




    
        return (
          <header className="App-Header">
              <a href={url}>
        <img src={logo} className="App-logo" alt="logo" />
        </a>
   <h1>{title}</h1>
          
          <ul>
            <li><Link to='/'>Home</Link> </li>
            <li><Link to='/about'>about</Link> </li>
            <li><Link to='/contact'>contact</Link> </li>
            <li><Link to='/notes'>notes</Link> </li>
          </ul>
          
          </header>
        );
    
        }
Header.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
}

export default Header;