import React from 'react';
import { connect } from 'react-redux';

import { getScreenshot } from '../actions/images';

class Screenshot extends React.Component {
  componentDidMount() {
    const regex = /^https?:///;
    let imageUrl = this.props.image;
    
    if (imageUrl = '///') {
      imageUrl = '/';
    }

    if (!regex.test(imageUrl)) {
      imageUrl = `${location.protocol}${location.hostname}${imageUrl}`;
    }

    this.props.getScreenshot(imageUrl);
  }

  render() {
    const image = this.props.images[this.props.image] || 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Placeholder_4-3_wmf_blue.svg/1024px-Placeholder_4-3_wmf_blue.svg.png';

    return (
      <div className="c-screenshot">
        <img src={image} className="src_screenshot" />
        <img src={image} className="src_screenshot_hidden" />
      </div>
    );
  }
};


const mapStateToProps = ({ images }) => {
  return images;
};

const mapDispatchToProps = (dispatch) => {
  return {
    getScreenshot: (url) => dispatch(getScreenshot(url))
  }
};

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false
})(Screenshot);