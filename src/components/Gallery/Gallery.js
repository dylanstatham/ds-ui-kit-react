import React from 'react';
import './styles.css';

const Gallery = props => {
  const { rowCount, itemCount } = props;

  const renderRows = () => {
    const rows = [];
    for (let i = 0; i < rowCount; i++) {
      const items = [];
      for (let j = 0; j < itemCount; j++) {
        items.push(
          <div key={j}>
            <div className="Gallery__item uk-card uk-card-default uk-card-body">
              ???
            </div>
          </div>
        );
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
