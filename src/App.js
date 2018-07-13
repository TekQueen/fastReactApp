import React, { Component } from 'react';
import './App.css';

import Page1 from './components/Page1';
//import Page2 from './components/Page2';
//import Page3 from './components/Page3';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      route: 'page1',
      component: null 
    }
  }

  // no need to bind
  onRouteChange = (route) => {
    
    // with code splitting

    if(route === 'page1') {
      this.setState({route});
    } else if(route === 'page2') {
      import('./components/Page2')
      .then((Page2) => {
        console.log(Page2);
        this.setState({
          route: route,
          component: Page2.default
        })
      })
    } else if(route === 'page3') {
      import('./components/Page3')
      .then((Page3) => {
        this.setState({
          route: route,
          component: Page3.default
        })
      })
    }

  }

  render() {
      let {route} = this.state;

      if (route === 'page1') {
        return <Page1 onRouteChange = {this.onRouteChange} />
      } else {
        return <this.state.component onRouteChange = {this.onRouteChange} />
      }
  }
}

export default App;
