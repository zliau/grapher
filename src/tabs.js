import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './tabs.css';

class Tabs extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="">Tracker</a>
                    </Navbar.Brand>
                </Navbar.Header>

                <Nav>
                    <NavItem>
                        Data
                    </NavItem>
                    <NavItem>
                        Charts
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default Tabs;