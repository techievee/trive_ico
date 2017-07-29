import React, { Component } from 'react';
import { Button, Menu, Container, Dropdown} from 'semantic-ui-react';

class NavMenu extends Component {
  render() {
    return (
      <Menu size='massive' attached='top'>
        <Container>
            <Menu.Item header className='ui fluid'>
                Expanse               
            </Menu.Item>

            <Menu.Menu position="right">
                <Menu.Item>
                  <Dropdown item text='Language'>
                      <Dropdown.Menu>
                            <Dropdown.Item>English</Dropdown.Item>
                            <Dropdown.Item>Russian</Dropdown.Item>
                            <Dropdown.Item>Spanish</Dropdown.Item>
                      </Dropdown.Menu>
                  </Dropdown>
                </Menu.Item>
                <Menu.Item>
                  <Button>Sign Up</Button>
                </Menu.Item>
                <Menu.Item>
                  <Button primary>Log-In</Button>
                </Menu.Item>
            </Menu.Menu>            
        </Container>
      </Menu>
    );
  }
}

export default NavMenu;
