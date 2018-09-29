import React, { Component } from 'react';
import Gallery from '../Gallery/Gallery';
import './styles.css';

const galleryData = [
  {
    src: 'http://fillmurray.com/300/300',
    alt: 'Phil Murray is great!',
    text:
      'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
  },
  {
    src: 'http://fillmurray.com/300/300',
    alt: 'Phil Murray is great!',
    text:
      'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
  },
  {
    src: 'http://fillmurray.com/300/300',
    alt: 'Phil Murray is great!',
    text:
      'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
  }
];

class App extends Component {
  render() {
    return (
      <div className="uk-container uk-margin-large-bottom">
        <Gallery data={galleryData} columns={3} />
      </div>
    );
  }
}

export default App;
