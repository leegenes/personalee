import React, { Component } from 'react';
import View from './View';

class ViewContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View selectedView={ this.props.selectedView } />
    )
  }
}
export default ViewContainer;
