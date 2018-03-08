import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Container from './Container';

class App extends Component {

    render() {
        return (
          <div>
            <BrowserRouter>
              <div>
                <Header />
                <div className="container">
                  <Route exact path="/" component={Container} />
                </div>
              </div>
            </BrowserRouter>
          </div>
        );
    }
}

export default connect(null, actions)(App);
