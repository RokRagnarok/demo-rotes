import React from 'react';

const Footer =() => {
    
        const root ={
            marginTop: '20px',

        }
        return (
            <footer>
                &copy; Nunca sabras si nunca intentas {new Date().getFullYear()}
            </footer>
        );
    
}

export default Footer;