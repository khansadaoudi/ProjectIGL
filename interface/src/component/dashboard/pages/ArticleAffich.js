import React ,{Component} from 'react';
import axios from 'axios';
import  {  MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

class ArticleAffich extends Component{

  state = {
    titre : '',
    contenu : '',
    posts : []
  };

  componentDidMount = () => {
    this.getBlogPost();
  };

  //retreiving data yes!
  getBlogPost = () => {
    axios.get('/api')
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
        console.log('Data has been received!!');
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  }
  //
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  //rendre les chaps vides apres la sauvegarde 
  resetUserInputs = () => {
    this.setState({
      titre: '',
      contenu: ''
    });
  };
  
  //Valider 
  submit =(event)=>{
    event.preventDefault();

    const payload = {
      titre : this.state.titre,
      contenu : this.state.contenu
    };
    
  // Axios envoyer la donnée 
  axios({
      url: 'http://localhost:/api/save',
      method: 'POST',
      data: payload
    })
      .then(() => {
        console.log('Data has been sent to the server');
        this.resetUserInputs();
        //this.getBlogPost();
      })
      .catch(() => {
        console.log('Internal server error');
      });;
  };  
  
  // displaying posts
  displayBlogPost = (posts) => {

    if (!posts.length) return null;


    return posts.map((post, index) => (
      <div key={index} className="blog-post__display">
        <MDBCol>
        <MDBCard style={{ width: "22rem" }}>
          
          <MDBCardBody>
            <MDBCardTitle>{post.titre}</MDBCardTitle>
            <MDBCardText>
            {post.contenu}
            </MDBCardText>
          
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      </div>
    ));
  };
  

  render() {
    console.log('States: ',this.state);
    //JSX
    return(
        

        <div className="blog-">
          {this.displayBlogPost(this.state.posts)}
        </div>
     
    );
  }
}
export default ArticleAffich;