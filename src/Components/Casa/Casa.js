import React, { Component } from 'react';
import './Casa.css';
 class Casa extends Component {
    constructor() {

        super();

        this.state = {
            name: 'Motivate',
        }
  }

   
    render() {




        const buttonStyle = {
            backgroundColor: 'grey',
            border: '1px solid grey',

        }
       const{name} = this.state;




        
            setTimeout(() => {
                this.setState({
                   name: 'Motivate',
                })
          }, 3000)
        
        setTimeout(() => {
            this.setState({
               name: 'a mejorar',
           })
        }, 3000);
        console.log(3000);
        return (
            <div className="Home">
                <h1>{this.state.name}</h1>
                <h2><font color="red">PALABRAS MOTIVACIONALES</font></h2>
               <font color="red"><p>Aqui algunas palabras de motivacion para mejprar y motivarse</p></font>
                


                <center><b><a href="https://www.youtube.com/watch?v=_pY9XE0wbfw">Para Entrenar</a></b></center>
                <b><a href="https://www.youtube.com/watch?v=vByfTD9R7r4">Para Gym</a></b>
                <div>
                 
                   
                </div>
            </div>
        );
    }
}

export default Casa;