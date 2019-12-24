import React, { Component } from 'react';
import { MDBCol,MDBInput,MDBRow,MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact';
import axios from "axios";
class EtudModel extends Component {
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
       groupe:"",
        annee:"",
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
    const { nom, prenom,groupe,annee ,email, password,confirmation } = this.state;

  

  axios
  .post(
    "http://localhost:3001/AddEtud",
    {
      Prof: {
nom:nom,
prenom:prenom,
groupe:groupe,
annee:annee ,
        email: email,
        password: password,
        confirmation:confirmation
    
      }
    },
    { withCredentials: true }
  )
  .then(response => {
    if (response.data.logged_in) {
      this.props.handleSuccessfulAddetud(response.data);
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
      <MDBBtn onClick={this.toggle}>Ajouter Etudiant</MDBBtn>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        <MDBModalHeader toggle={this.toggle}>Ajouter Etudiant</MDBModalHeader>
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
                label="groupe"
                type="text"
                required
                value={this.state.groupe}
                onChange={this.handleChange}
              /></MDBCol>
               <MDBCol md="6"> 
               <div>
        <select className="browser-default custom-select">
          <option>année d'étude   </option>
          <option value={this.state.annee}> 1 Cp</option>
          <option value={this.state.groupe}> 2 Cp</option>
          <option value={this.state.groupe}>1 Cs</option>
          <option value={this.state.groupe}>2 Cs</option>
          <option value={this.state.groupe}>3 Cs</option>
        </select>
      </div>
              </MDBCol>
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

export default EtudModel;