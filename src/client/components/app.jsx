import React from 'react';
import { connect } from 'react-redux';

import Tile from './tile';
import { getTiles } from '../actions/tiles';

class App extends React.Component {
  componentDidMount() {
    this.props.getTiles();
  }

  render() {
    return (
      <div className="c-tiles-homepage">
        <div className='c-tiles-wrapper'>
          <div className="c-tiles-header">
            <h1>Home Local</h1>
            <p>Navigate to different sites here</p>
          </div>
          <div className="c-tiles-content">
          {
            this.props.tiles.map((t) => {
              return <Tile data={t} key={t.name} />
            })
          }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ tiles }) => {
  return tiles
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTiles: () => dispatch(getTiles())
  }
}

const ReduxApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ReduxApp;
