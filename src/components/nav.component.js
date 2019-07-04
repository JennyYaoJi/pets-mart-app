import React, { Component } from 'react';
import { Link } from "react-router-dom";

import logo from "../logo.svg";

export default class Nav extends Component{
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank" rel="noopener noreferrer">
                        <img src={logo} width="30" height="30" alt="CodingTheSmartMay.com" />
                    </a>
                    <Link to="/" className="navbar-brand">Pets Mart App</Link>
                    <div className="collpase navbar-collpase">
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="navbar-item">
                               <Link to="/about" className="nav-link">About</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}