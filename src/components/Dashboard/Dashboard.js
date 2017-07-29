import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import {Table, Section, Item, Container, Header, List, Icon} from 'semantic-ui-react'

export const DashboardRoutes = () => (
    <Switch>
        <Route exact path='/dashboard' component={Dashboard} />
    </Switch>
)

const DashboardSection = (props) => (
    <Table compact celled color={props.color} key={props.color}>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell colSpan="6">{props.sectionName}</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            <Table.Row>
                <Table.Cell>
                    <Icon name="umbrella" /> LAB
                </Table.Cell>
                <Table.Cell>Bought on 10/20/2016 10:00 AM</Table.Cell>
                <Table.Cell>Ends in 2 days</Table.Cell>
                <Table.Cell>You own 10000 LAB</Table.Cell>
                <Table.Cell>You paid 100 EXP</Table.Cell>
            </Table.Row>
        </Table.Body>
        <Table.Footer>

        </Table.Footer>
    </Table>
)

class Dashboard extends Component {
    
    render() {
        return (
            <Container>
                <DashboardSection sectionName="My Campaings" color="green" />
                <DashboardSection sectionName="My Investments" color="teal" />
                <DashboardSection sectionName="My Watchlist" color="blue" />
                <DashboardSection sectionName="Ongoing Campaings" color="orange" />
            </Container>
        );
    }
}

export default Dashboard;