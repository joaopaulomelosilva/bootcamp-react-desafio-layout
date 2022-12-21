import './styles.css';
import 'bootstrap/js/src/collapse.js';
import { ReactComponent as ImageIcon } from '../../assets/images/Menuhamburguer.svg';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-md main-nav'>
            <div className='container-fluid nav-container-menu'>
                <Link to="/" className='nav-logo-text'>
                    <h4>Carros Top</h4>
                </Link>

                <button
                className="navbar-toggler btn-navbar"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#desafio-navbar"
                aria-controls="desafio-navbar"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span><ImageIcon /></span>
                </button>

                <div className='collapse navbar-collapse container-menu' id='desafio-navbar'>
                    <ul className='navbar-nav offset-md-2 main-menu'>
                        <li>
                            <NavLink to="/" activeClassName='active' exact className='navlink-menu'>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/products" activeClassName='active' exact className='navlink-menu'>
                                Catálogo
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
