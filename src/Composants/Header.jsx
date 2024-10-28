import React from 'react';
import './Header.css';  

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img className="logo" src="./logo.png" alt="logo Domassistel" />
        <hr className="separator_header" /> 
        <p className="header-tagline"> Le lien de sérénité <br /> entre vous et vos clients</p>
      </div>
      <h1 className="header-title">Domassistel Télésecrétariat Médical</h1>
    </header>
  );
}

export default Header;
