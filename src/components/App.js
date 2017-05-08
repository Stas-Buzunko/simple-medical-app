import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import FirstScreen from './FirstScreen'
import SecondScreen from './SecondScreen'
import '../App.css';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      points: 0,
      buttonsChecked: [0, 0, 0, 0, 0],
    }
  }

  radioClicked = (e) => {

  }

  render() {
    return (
      <div className="App container">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <FirstScreen
                  {...props}
                />
              )}
            />
            <Route
              exact
              path="/sore-throat"
              render={props => (
                <SecondScreen
                  radios={this.state.buttonsChecked}
                  onClick={this.radioClicked}
                  {...props}
                />
              )}
            />
            <Redirect from="*" to="/" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
