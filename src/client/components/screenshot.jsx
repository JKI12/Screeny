import React from 'react';

export default class Screenshot extends React.Component {
  render() {
    const image = 'http://via.placeholder.com/1024x768';

    return (
      <div className="c-screenshot">
        <img src={image} className="src_screenshot" />
        <img src={image} className="src_screenshot_hidden" />
      </div>
    );
  }
};
