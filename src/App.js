import React, { Component } from 'react';
import Navigation from './components/Navigation';
import View from './components/View';

class App extends Component {
  render() {
    return (
      <div className="AppContainer">
        <Navigation />
        <View />
      </div>
    )
  }
}
export default App;
