import React, { Component } from 'react';
import Gallery from '../Gallery/Gallery';
import './styles.css';

const images = [
  'http://fillmurray.com/300/300',
  'http://fillmurray.com/300/300',
  'http://fillmurray.com/300/300',
  'http://fillmurray.com/300/300',
  'http://fillmurray.com/300/300',
  'http://fillmurray.com/300/300',
  'http://fillmurray.com/300/300',
  'http://fillmurray.com/300/300',
  'http://fillmurray.com/300/300'
];

class App extends Component {
  render() {
    return (
      <div className="uk-container uk-margin-large-bottom">
        <Gallery images={images} columns={3} />
      </div>
    );
  }
}

export default App;
