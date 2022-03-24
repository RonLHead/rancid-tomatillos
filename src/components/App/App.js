import React, { Component } from 'react';
import './App.css';

import movieData from '../../movies-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [ {movieData} ],
      error: ''
    }
  }

  
}

export default App;
