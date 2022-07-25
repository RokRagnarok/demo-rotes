import React from 'react';
import Header from '../shared/layout/Header';
import './App.css';
import Footer from '../shared/layout/Footer';
import Content from '../shared/layout/Content';
import {element} from 'prop-types';


function App(props) {
  return (
    <div className="App">
      <font color="blue"><Header title="You Can Do it"/></font>
      <Content >
        {/* Components */}
        {props.children}
      </Content>
      <Footer />
    </div>
  );

}

App.propTypes = {
  children: element.isRequired,
}

export default App;