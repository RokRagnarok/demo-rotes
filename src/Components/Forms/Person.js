import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import './Person.css';
import './Popup.css';

class Person extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',

            errors: {
                firstName: false,
                lastName: false
            }
        }


    }
    
    handleOnChange = e => {
        const {target: {value, name}} = e;

        this.setState({
            [name]: value
        })

        console.log(value.trim());
    }

    handleOnSubmit = e => {
        e.preventDefault();
        const {firstName, lastName, email, phone} = this.state;

       
        this.setState({
            errors: {
                firstName: firstName.trim() === '',
                lastName:  lastName.trim() === '',
            }
        })

        if (firstName.trim() && lastName.trim){
            Popup.create({
                title: 'informacion de la persona',
                content : (
                    <div>
                        <p><strong>Nombre:</strong>{firstName}{lastName}</p>
                        <p><strong>Enail:</strong>{email}</p>
                        {phone && <p><strong>Telefono:</strong> {phone}</p>}
                    </div>
                ),
                buttons: {
                    right: [{
                        text: 'Close',
                        action: popup => popup.close()
                    }]
                }
        })



            const data = {
                firstName, 
                lastName, 
                email, 
                phone
            };
    
            console.log('Data: ', data);
        }
      
    }
    render() {
        return (
            <div className='Person'>
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <label>
                            <p><strong>Nombre</strong></p>
                            <input
                                name="firstName"
                                type = "text"
                                value = {this.state.firstName}
                                onChange = {this.handleOnChange}
                                className={
                                    this.state.errors.firstName ? 'error': ''
                                }
                            />
                        </label>
                        {
                            this.state.errors.firstName
                            &&
                            <div className= 'errorMessage'>Required</div>
                        }

                    </div>
                    <div>
                        <label>
                            <p><strong>Apellido</strong></p>
                            <input
                                name="lastName"
                                type = "text"
                                value = {this.state.lastName}
                                onChange = {this.handleOnChange}
                                className={
                                    this.state.errors.lastName ? 'error': ''
                                }
                            />
                            
                        </label>
                        {
                            this.state.errors.lastName
                            &&
                            <div className= 'errorMessage'>Required</div>
                        }
                    </div>
                    <div>
                        <label>
                            <p><strong>Email</strong></p>
                            <input
                                name="email"
                                type = "email"
                                value = {this.state.email}
                                onChange = {this.handleOnChange}
                                
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            <p><strong>Telfono</strong></p>
                            <input
                                name="phone"
                                type = "tel"
                                value = {this.state.phone}
                                onChange = {this.handleOnChange}
                            
                                
                            />
                        </label>
                    </div>
                
                       {   }
                 

                       
                       
                       
                       
                       
                       
                        
                        <Popup
                        
                       trigger={ <button>Enviar</button>} 
                        modal
                        nested
                        >
                            {close => (
                            <div className = "modal">
                             <button className ="close" onClick = {close}>
                                &times;
                             </button>
                            <div className ="header">Datos de la persona</div>
                            <div className ="content">
                                {''}
                                    
                                <font color="red"><b><p>Nombre: {this.state.firstName}</p></b></font>
                                <p>                       </p>
                                <font color="red"><b><p>Apellido: {this.state.lastName}</p></b></font>
                                <p>                      </p>
                            <font color="red"><b><p>Email: {this.state.email}</p></b></font>
                            <p>                  </p>
                           <font color="red"><b><p>Telefono: {this.state.phone}</p></b></font>

                                
                           


        </div>
        <div className="actions">
          <Popup>
          </Popup>
         


                            </div>
                            
                            
                            
                            
                            
                            
                            </div>


                            )}
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        </Popup>
                       


                       
                 
                    
                </form>
            </div>
        );
    }
}

export default Person;