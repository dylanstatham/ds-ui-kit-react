import React, { Component } from 'react';
import Gallery from '../Gallery/Gallery';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="uk-container uk-margin-large-bottom">
        <Gallery />
      </div>
    );
  }
}

export default App;
