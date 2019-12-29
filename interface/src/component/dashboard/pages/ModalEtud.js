import React, { Component } from 'react';
import { MDBCol,MDBInput,MDBRow,MDBContainer, MDBBtn } from 'mdbreact';
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
class ModalEtud extends Component {
  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeNom = this.onChangeNom.bind(this);
    this.onChangePrenom = this.onChangePrenom.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      email: '',
      password: '',
      nom :'',
      prenom :'',
      age:'',
      date:new Date(),

    }
  }
  onChangeEmail(e) {
    this.setState({
    email: e.target.value
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  onChangeNom(e) {
    this.setState({
    nom: e.target.value
    });
  }
  onChangePrenom(e) {
    this.setState({
      prenom:e.target.value
    });
  }
  onChangeAge(e) {
    this.setState({
      age:e.target.value
    });
  }
  onChangeDate(date) {
    this.setState({
      date:date
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const Etudiant = {
     email: this.state.email,
      password: this.state.password,
     nom: this.state.nom,
    prenom: this.state.prenom,
     age: this.state.age,
      date: this.state.date,
    };
    
    console.log(Etudiant);

    axios.post('http://localhost:5000/etudiants/add', Etudiant)
      .then(res => console.log(res.data));
  
  window.location = '/';
  }







render(props) {
  return (
    <MDBContainer> 
      <MDBRow>
        <MDBCol md="12">
          <form onSubmit={this.onSubmit}>
            <div className="grey-text">
                <MDBRow>
            <MDBCol md="6"> 
              <MDBInput
               name="nom"
                label="Nom"
                type="text"
                required
                value={this.state.nom}
                  onChange={this.onChangeNom}
              /></MDBCol>
               <MDBCol md="6"> 
              <MDBInput
                label="Prenom"
                name="prenom"
                type="text"
                required
                value={this.state.prenom}
                onChange={this.onChangePrenom}
              /></MDBCol>
              </MDBRow>
              <MDBRow>
            <MDBCol md="6"> 
              <MDBInput
              name="age"
                label="age"
                type="number"
                required
                value={this.state.age}
                onChange={this.onChangeAge}
              /></MDBCol>
               <MDBCol md="6"> 
               <MDBInput
               name="date"
                type="date"
                required
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
              </MDBCol>
              </MDBRow>
              <MDBInput
              name="email"
                label="Email"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                value={this.state.email}
                onChange={this.onChangeEmail}
              />
              <MDBInput
                name="password"
                label="Mot de passe "
                group
                type="password"
                validate
                value={this.state.password}
                onChange={this.onChangePassword}
              />
            </div>
            <MDBBtn type="submit" color="primary">Ajouter </MDBBtn>
          </form>
        </MDBCol>
      </MDBRow>
</MDBContainer>
    );
  }
}

export default ModalEtud;