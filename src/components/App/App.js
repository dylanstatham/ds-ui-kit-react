import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="uk-container uk-margin-large-bottom">
        <h2>Grid Example</h2>
        <div className="uk-child-width-expand@s uk-text-center" uk_grid="test">
          <div>
            <div className="uk-card uk-card-default uk-card-body">
              What a beautiful sunrise
            </div>
          </div>
          <div>
            <div className="uk-card uk-card-default uk-card-body">Item</div>
          </div>
          <div>
            <div className="uk-card uk-card-default uk-card-body">Item</div>
          </div>
        </div>
        <div className="uk-child-width-expand@s uk-text-center" uk-grid>
          <div>
            <div className="uk-card uk-card-default uk-card-body">Item</div>
          </div>
          <div>
            <div className="uk-card uk-card-default uk-card-body">Item</div>
          </div>
          <div>
            <div className="uk-card uk-card-default uk-card-body">Item</div>
          </div>
        </div>
        <div className="uk-child-width-expand@s uk-text-center" uk-grid>
          <div>
            <div className="uk-card uk-card-default uk-card-body">Item</div>
          </div>
          <div>
            <div className="uk-card uk-card-default uk-card-body">Item</div>
          </div>
          <div>
            <div className="uk-card uk-card-default uk-card-body">Item</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
