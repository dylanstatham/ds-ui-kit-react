import React from 'react';
import './styles.css';
import GalleryItem from '../GalleryItem/GalleryItem';

const Gallery = props => {
  const { data, columns } = props;

  const rem = data.length % columns;
  const rowCount = data.length / columns + (rem === 0 ? 0 : 1);

  const renderRows = () => {
    const rows = [];
    let counter = 0;
    for (let i = 0; i < rowCount; i++) {
      const items = [];
      for (let j = 0; j < columns; j++) {
        if (data[counter])
          items.push(<GalleryItem key={j} {...data[counter]} />);
        counter++;
      }
      rows.push(
        <div
          key={i}
          className="Gallery__row uk-child-width-expand@s uk-text-center"
        >
          {items}
        </div>
      );
    }
    return rows;
  };

  const rows = renderRows();
  return (
    <div className="Gallery">
      <div className="Gallery__header uk-section">
        <h1>Album example</h1>
        <p>
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don't simply skip over it entirely.
        </p>
        <div>
          <button class="uk-button uk-button-primary">
            Main call to action
          </button>
          <button class="uk-button uk-button-secondary">
            Secondary action
          </button>
        </div>
      </div>
      <div className="Gallery__items">{rows} </div>
    </div>
  );
};
export default Gallery;
