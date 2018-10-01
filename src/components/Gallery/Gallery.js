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
  return <div className="Gallery">{rows}</div>;
};
export default Gallery;
