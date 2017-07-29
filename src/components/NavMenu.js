import React, {Component} from 'react';
import {
  Button,
  Menu,
  Container,
  Dropdown,
  Label,
  Segment,
  Icon,
  Image,
  Grid,
  Header,
  Divider
} from 'semantic-ui-react';
import {Link} from 'react-router-dom'
import './NavMenu.css'

class NavMenu extends Component {

  state = {}

  render() {

    const {activeItem} = this.state;

    return (
      <div>
        <Menu inverted color="teal" size="massive" attached='top'>
          <Dropdown item icon='wrench' simple>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Icon name='dropdown'/>
                <span className='text'>New</span>

                <Dropdown.Menu>
                  <Dropdown.Item>Document</Dropdown.Item>
                  <Dropdown.Item>Image</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Item>
              <Dropdown.Item>Open</Dropdown.Item>
              <Dropdown.Item>Save...</Dropdown.Item>
              <Dropdown.Item>Edit Permissions</Dropdown.Item>
              <Dropdown.Divider/>
              <Dropdown.Header>Export</Dropdown.Header>
              <Dropdown.Item>Share</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Menu position='right'>
            <div className='ui right aligned category search item'>
              <div className='ui transparent icon input'>
                <input className='prompt' type='text' placeholder='Search animals...'/>
                <i className='search link icon'/>
              </div>
              <div className='results'></div>
            </div>
          </Menu.Menu>
        </Menu>

        {/* <Segment attached="bottom" className="jumbotron">
                        <div className="promo">Welcome to Trive Crowdsale</div>
                        <Divider section></Divider>
                        <Container>
                            <div className="promo">Perfect</div>
                            <Divider hidden />
                            <div className="promo">Perfect</div>
                        </Container>
                        <Divider section></Divider>
                </Segment> */}

        <div className="jumbotron1">
          <div className="promo">Welcome to Trive Crowdsale</div>
          <Divider section></Divider>
          <Container>
            <div className="promo">Perfect</div>
            <Divider hidden/>
            <div className="promo">Perfect</div>
          </Container>
          <Divider section></Divider>
        </div>

      </div>
    );
  }
}

export default NavMenu;
