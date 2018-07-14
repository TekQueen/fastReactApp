import React, { Component } from 'react';
import './App.css';

import Page1 from './components/Page1';
import Loadable from 'react-loadable';

const Loading = () => <h1>LOADING ...</h1>

const Page2 = Loadable({
  loader: () => import('./components/Page2'),
  loading: Loading
})

const Page3 = Loadable({
  loader: () => import('./components/Page3'),
  loading: Loading
})

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      route: 'page1',
      component: null 
    }
  }

  onRouteChange = (route) => {
    this.setState({ route })
  }

  render() {
      let {route} = this.state;

      if (route === 'page1') {
        return <Page1 onRouteChange = {this.onRouteChange} />
      } else if (route === 'page2'){
        return <Page2 onRouteChange = {this.onRouteChange} />
      } else if (route === 'page3') {
        return <Page3 onRouteChange = {this.onRouteChange} />
      }
  }
}

export default App;
