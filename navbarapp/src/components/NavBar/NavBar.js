import React from 'react'
import 'materialize-css/dist/css/materialize.min.css';

const NavBar = () => {
    return (
        <nav>
            <div class="nav-wrapper">
                <a href="#" class="brand-logo">Tecnologia E-Commerce</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="catalog.html">Catalogo</a></li>
                    <li><a href="list.html">Mis compras</a></li>
                    <li><a href="cart.html">Carrito</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;