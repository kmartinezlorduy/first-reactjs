import React from 'react'
import 'materialize-css/dist/css/materialize.min.css';
import {Link} from 'react-router-dom';



const NavBar = () => {
    return (
        <nav>
            <div class="nav-wrapper">
                <a href="#" class="brand-logo">Tecnologia E-Commerce</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><Link className="li" to='/'>Home</Link></li>
                    <li><Link className="li"to='/categories'>Categorias</Link></li>
                    <li><Link className="li"to='/contact'>Contacto</Link></li>                    
                    <li><Link className="li" to='/about'>Nosotros</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;