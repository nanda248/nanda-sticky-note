import React, { Component } from 'react';
import './App.css';

import MainLayout from './ui/MainLayout';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
class App extends Component {

  render() {
    return (
      <div class="App">
        <MainLayout />
      </div>
    );
  }
}

export default App;
