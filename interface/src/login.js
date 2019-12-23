import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './login.css';
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse,
MDBContainer, MDBRow, MDBCol, MDBIcon,MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBFooter} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import axios from "axios";


class Login extends Component {
    state = {
      isOpen: false
    };
    
    toggleCollapse = () => {
      this.setState({ isOpen: !this.state.isOpen });
    }
    
    constructor (prpos )
    {
        super(prpos);
        this.state ={
            email:"",
            password:"",
            loginError:""
        };
        this.handleSubmit=this.handleSubmit.bind (this);
        this.handleChange=this.handleChange.bind (this);
    }
    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    
      handleSubmit(event) {
        const { email, password } = this.state;

      
    
      axios
      .post(
        "http://localhost:3001/dashboard",
        {
          user: {
            email: email,
            password: password
          }
        },
        { withCredentials: true }
      )
      .then(response => {
        if (response.data.logged_in) {
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch(error => {
        console.log("login error", error);
      });
    event.preventDefault();
  }



    render() {
      return (
        <Router>
          <MDBNavbar  color="info-color" dark expand="md">
            <MDBNavbarBrand>
              <strong className="white-text">Esi Gestion</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav left>
                <MDBNavItem active>
                  <MDBNavLink to="#!">Home</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar  >  
    <MDBContainer  >
    <div className="p-5 col-example"></div>
  
    <MDBRow >
      <MDBCol md="5">
        <MDBCard >
       
        <div className="header pt-3 blue-gradient">
              <MDBRow className="d-flex justify-content-center">
                <h3 className="white-text mb-3 pt-3 font-weight-bold">
                  Connexion 
                </h3>
              </MDBRow>
              </div>
          <MDBCardBody>
            <form>
              <div className="grey-text">
                <MDBInput
                  label="Email"
                  name="email"
                  placeholder="Email"
                  icon="envelope"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
                <MDBInput
                  label="Mot de passe"
                  name="password"
                  icon="lock"
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="text-center">
              <MDBBtn outline color="info" type="submit">
                Connexion <MDBIcon far icon="paper-plane" className="ml-1" />
              </MDBBtn>
            </div>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  </Router>
        );
      }
    }
    
    export default Login ;