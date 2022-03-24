import React, { Component } from 'react';
import './App.css';

import movieData from '../../movies-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [ ],
      error: ''
    }
  }

  render() {
    return(
      <main>
        <header>
          <h1>Rancid Tomatillos</h1>
        </header>
        {/* <Movies /> */}
      </main>
    )
  }

}

export default App;
