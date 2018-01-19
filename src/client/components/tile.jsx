import React from 'react';

import Screenshot from './screenshot';

export default (props) => {
  return (
    <div className="c-tile">
      <a href={props.data.url}>
        <Screenshot image={props.data.url} />
        <div className="c-tile-name">
          <p>{props.data.name}</p>
        </div>
      </a>
    </div>
  )
};
