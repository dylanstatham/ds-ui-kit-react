import React from 'react';
import './styles.css';

const Gallery = props => {
  const { images, columns } = props;

  const rem = images.length % columns;
  const rowCount = images.length / columns + (rem === 0 ? 0 : 1);

  console.log('rowCount', rowCount);
  console.log('rem', rem);
  console.log('columns', columns);
  console.log('images.length', images.length);

  const renderRows = () => {
    const rows = [];
    let counter = 0;
    for (let i = 0; i < rowCount; i++) {
      const items = [];
      for (let j = 0; j < columns; j++) {
        items.push(
          <div key={j}>
            <div className="Gallery__item uk-card uk-card-default uk-card-body">
              <img src={images[counter]} alt={images[counter]} />
            </div>
          </div>
        );
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
