import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import './App.css';
import Navbar from "./components/layouts/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import AddItem from "./containers/add-item/AddItem";
import ShowItem from "./containers/show-item/ShowItem";
import store from "./store";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  };

  render() {
    return (
      <Provider store = { store }>
        <Router>
          <div className="App">
            <header>
              <Navbar />
            </header>
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route exact path="/add_item" component={ AddItem } />
              <Route exact path="/show_item" component={ ShowItem } />
              <Route exact path="/about" component={ About } />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
