import React, { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react';
import NavMenu from './NavMenu'
import { DashboardRoutes } from './Dashboard'

class Home extends Component {

  render() {
    return (
      <Container fluid>
        <NavMenu />
        <Divider hidden />
        <DashboardRoutes />
      </Container>   
    );
  }
}

export default Home;
