import React from 'react';
import './styles.css';

const GalleryItem = ({ src, alt, text }) => {
  return (
    <div className="GalleryItem uk-card uk-card-default">
      <div className=" uk-card-body">
        <img src={src} alt={alt} />
        <p>{text}</p>
        <div class="uk-button-group">
          <button class="uk-button uk-button-default">View</button>
          <button class="uk-button uk-button-default">Edit</button>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
