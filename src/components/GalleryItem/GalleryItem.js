import React from 'react';

const GalleryItem = ({ src, alt, text }) => {
  return (
    <div className="Gallery__item uk-card uk-card-default uk-card-body">
      <img src={src} alt={alt} />
      <p>{text}</p>
      <div class="uk-button-group">
        <button class="uk-button uk-button-default">View</button>
        <button class="uk-button uk-button-default">Edit</button>
      </div>
    </div>
  );
};

export default GalleryItem;
