import React from 'react';
import './styles.css';

const GalleryItem = ({ src, alt, text, duration }) => {
  return (
    <div className="GalleryItem uk-card uk-card-default">
      <div className=" uk-card-body">
        <img src={src} alt={alt} />
        <div className="GalleryItem__blurb">{text}</div>

        <div className="uk-flex uk-flex-between">
          <div class="uk-button-group">
            <button class="uk-button uk-button-default">View</button>
            <button class="uk-button uk-button-default">Edit</button>
          </div>
          <div className="GalleryItem__duration">{duration}</div>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
