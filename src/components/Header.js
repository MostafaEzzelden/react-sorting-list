import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Header extends Component {

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={'/'} className="left brand-logo" style={{fontSize: '1.5rem'}}>Selection Sort Algorithms</Link>
        </div>
      </nav>
    );
  }
}


export default connect(null)(Header);