import React, { Component } from 'react';
import { MDBCol,MDBInput,MDBRow,MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact';
import axios from "axios";
class ProfModel extends Component {
state = {
  modal: false
}

toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}
constructor (prpos )
{
    super(prpos);
    this.state ={
        nom:"",
        prenom:"",
        grade:"",
        module:"",
        email:"",
        password:"",
        confirmation:"",
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
    const { nom, prenom,grade,module ,email, password,confirmation } = this.state;

  

  axios
  .post(
    "http://localhost:3001/AddProf",
    {
      Prof: {
nom:nom,
prenom:prenom,
grade:grade,
module:module ,
        email: email,
        password: password,
        confirmation:confirmation
    
      }
    },
    { withCredentials: true }
  )
  .then(response => {
    if (response.data.logged_in) {
      this.props.handleSuccessfulAddProf(response.data);
    }
  })
  .catch(error => {
    console.log("Add error", error);
  });
event.preventDefault();
}
render() {
  return (
    <MDBContainer>
      <MDBBtn onClick={this.toggle}>Ajouter Enseignant</MDBBtn>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        <MDBModalHeader toggle={this.toggle}>Ajouter Enseignant</MDBModalHeader>
        <MDBModalBody>
        
      <MDBRow>
        <MDBCol md="12">
          <form>
            <div className="grey-text">
                <MDBRow>
            <MDBCol md="6"> 
              <MDBInput
                label="Nom"
                type="text"
                required
                value={this.state.nom}
                  onChange={this.handleChange}
              /></MDBCol>
               <MDBCol md="6"> 
              <MDBInput
                label="Prenom"
                type="text"
                required
                value={this.state.prenom}
                onChange={this.handleChange}
              /></MDBCol>
              </MDBRow>
              <MDBRow>
            <MDBCol md="6"> 
              <MDBInput
                label="Module"
                type="text"
                required
                value={this.state.module}
                onChange={this.handleChange}
              /></MDBCol>
               <MDBCol md="6"> 
              <MDBInput
                label="Grade"
                type="text"
                required
                value={this.state.grade}
                onChange={this.handleChange}
              /></MDBCol>
              </MDBRow>
              <MDBInput
                label="Email"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <MDBInput
                label="Mot de passe "
                group
                type="password"
                validate
                value={this.state.password}
                onChange={this.handleChange}
              />
              <MDBInput
                label="Confirmation Mot de passe"
                group
                type="password"
                validate
                value={this.state.confirmation}
                onChange={this.handleChange}
              />
            </div>
            <MDBBtn color="primary">Ajouter </MDBBtn>
          </form>
        </MDBCol>
      </MDBRow>
        </MDBModalBody>
      </MDBModal>
    </MDBContainer>
    );
  }
}

export default ProfModel;