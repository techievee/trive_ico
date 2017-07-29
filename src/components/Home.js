import React, { Component } from 'react';
import { Button, Menu, Container, Segment, Divider } from 'semantic-ui-react';
//import logo from './logo.svg';
//import './App.css';
import NavMenu from './NavMenu';
import TokenlabOverview from './TokenlabOverview';
import PopularICOs from './PopularICOs';

class App extends Component {
  render() {
    return (
      <Container fluid>
        <NavMenu />
        {/* <Divider/>
        <Container>
          <TokenlabOverview />
          <Divider/>
        </Container> */}
      </Container>      
    );
  }
}

export default App;
