import React from 'react';
import './styles.css';

const Gallery = () => (
  <div className="Gallery">
    <div className="Gallery__row uk-child-width-expand@s uk-text-center">
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

export default Gallery;
