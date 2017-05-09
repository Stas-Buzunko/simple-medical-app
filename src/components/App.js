import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import FirstScreen from './FirstScreen'
import SecondScreen from './SecondScreen'
import ResultScreen from './ResultScreen'
import '../App.css';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      points: 0,
      buttonsChecked: [null, null, null, null, null],
    }
  }

  radioClicked(question, value){

  	const currentAnswers = this.state.buttonsChecked.slice()
  	currentAnswers[question] = value

  	this.setState({
  		buttonsChecked: currentAnswers
  	})

  }

  render() {
    return (
      <div className="container-fluid">
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
                  onClick={this.radioClicked.bind(this)}
                  {...props}
                />
              )}
            />
            <Route
              exact
              path="/result-throat"
              render={props => (
                <ResultScreen
                	radios={this.state.buttonsChecked}
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
