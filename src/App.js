import React, { Component } from 'react';
import LeftBar from './components/LeftBar';
import View from './components/View';
import fire from './fire';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {blogPosts: [],
                  projects: []};
  }

  componentWillMount() {
    var self = this;
    self.getSiteData().then((result) => self.setState(
      {
        blogPosts: result.blogPosts,
        projects: result.projects
      })
    )}

  getSiteData() {
  var db = fire.database();
  var ref = db.ref('/').once('value');
  return ref.then(snapshot => { return snapshot.val() });
  }

  render() {
    return (
      <div className="App container">
        <LeftBar />
        <View
          blogPosts={this.state.blogPosts}
          projects={this.state.projects} />
      </div>
    )
  }
}
export default App;
