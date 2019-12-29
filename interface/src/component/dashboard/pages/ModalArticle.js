import React, { Component } from 'react';
import { MDBCol,MDBInput,MDBRow,MDBContainer, MDBBtn } from 'mdbreact';
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

class ModalArticle extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitre = this.onChangeTitre.bind(this);
    this.onChangeContenu = this.onChangeContenu.bind(this);
  
    this.state = {
    titre: '',
    contenu: ''

    }
  }
  onChangeTitre(e) {
    this.setState({
    titre: e.target.value
    });
  }
  onChangeContenu(e) {
    this.setState({
     contenu: e.target.value
    });
  }
  onChangeNom(e) {
    this.setState({
    nom: e.target.value
    });
  }
 
  onSubmit(e) {
    e.preventDefault();
    const BlogPost = {
     titre: this.state.titre,
      contenu: this.state.contenu,
     
    };
    
    console.log(BlogPost);

    axios.post('http://localhost:5000/api/save',BlogPost)
      .then(res => console.log(res.data));
  
  window.location = '/';
  this.setState({
   titre:'',
   contenu:''
  })
  }


render(props) {
  return (
    <MDBContainer> 
      <MDBRow>
        <MDBCol md="12">
          <form onSubmit={this.onSubmit}>
            <div className="grey-text">
                <MDBRow>
               
              <MDBInput
               name="titre"
                label="titre"
                type="text"
                required
                value={this.state.nom}
                  onChange={this.onChangeTitre}
              />
             
              </MDBRow>
              
              <MDBInput
                name="Contenu"
                label="Texte "
                group
                type="textarea"
                validate
                value={this.state.contenu}
                onChange={this.onChangeContenu}
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

export default ModalArticle;