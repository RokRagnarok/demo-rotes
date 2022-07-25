import React from 'react';
import PropTypes from 'prop-types';
import logo from '../images/logo.svg';
import{ Link } from 'react-router-dom';

const Header = (props) => {

const {title, url} = props;




    
        return (
          <header className="App-Header">
       
   <h1>{title}</h1>
          
          <ul>
            <li><Link to='/'>Home</Link> </li>
            <font color="red"><li><Link to='/ChartHome'>Graficas de peso</Link> </li></font>
            <font color="green"><li><Link to='/notes'>Rutinas</Link> </li></font>
            <font color="yellow"><li><Link to='/Todo'>Metas</Link></li></font>
            <li><Link to='/Casa'>Motivaciones</Link></li>
            <li><Link to='/Pomodoro'>Cronometro</Link></li>
            <li><Link to='/Forms'>Registros</Link></li>
            

            
          </ul>
          
          </header>
        );
    
        }
Header.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
}

export default Header;