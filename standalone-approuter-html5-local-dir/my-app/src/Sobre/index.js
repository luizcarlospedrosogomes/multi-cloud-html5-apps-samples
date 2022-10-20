import React from 'react';
import { Link } from 'react-router-dom';

const Sobre = () =>{
  return (
    <div>
      <h1>Página Sobre</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/usuario">Usuario</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sobre;