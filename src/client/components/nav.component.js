import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Nav extends Component {
  render() {
    return (
      <div>
        <div className="nav">
          <a className="navbar-logo" href="/">
            <img src="../../../image/logo.png" width="50" height="50" alt="" />
          </a>
          <div className="navbar-collpase">
            <ul className="navbar-list left">
              <li className="navbar-item">
                <Link to="/" className="nav-link">
                  首页
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/about" className="nav-link">
                  发现
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/about" className="nav-link">
                  商城
                </Link>
              </li>
            </ul>
            <ul className="navbar-list right">
              <li className="navbar-item">
                <Link to="/about" className="nav-link">
                  我的
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/about" className="nav-link">
                  关于
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
