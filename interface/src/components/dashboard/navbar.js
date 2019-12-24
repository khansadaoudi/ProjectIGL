import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav,MDBFormInline, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';


class NavBar extends Component {
    state = {
        collapse: false
    }

    onClick = () => {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <Router>
            <MDBNavbar  color="info-color-dark" className="flexible-navbar" light expand="md" scrolling>
                <MDBNavbarBrand   href="/">
                    <strong className="white-text" >Esi Gestion</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick = { this.onClick } />
                <MDBCollapse isOpen = { this.state.collapse } navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem >
                            <MDBNavLink to="#" className="white-text">Home</MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <a className="nav-link navbar-link" rel="noopener noreferrer" target="_blank" href="#" ><MDBIcon  className="white-text" fab icon="facebook" /></a>
                        </MDBNavItem>
                        <MDBNavItem>
                            <a className="nav-link navbar-link" rel="noopener noreferrer" target="_blank"href="#" ><MDBIcon className="white-text" fab icon="twitter" /></a>
                        </MDBNavItem>
                        <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0 " >
                  <input className="form-control mr-sm-2 " type="text" placeholder="Recherche" aria-label="Search" />
                </div>
              </MDBFormInline>
            </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
            </Router>
        );
    }
}

export default NavBar;