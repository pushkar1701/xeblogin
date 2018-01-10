import React from 'react';
import {Link} from 'react-router';

const Header = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                <a className="navbar-brand" href="#">Pushkar</a>
                </div>
                <ul className="nav navbar-nav">
                <li className="active"><Link to='/'>Home</Link></li>
                <li><Link to='About'>About</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;