import React from "react";
import axios from 'axios';
import { MDBBtn, MDBInput } from "mdbreact";
/*import "@fortawesome/fontawesome-free/css/all.min.css";*/
/*import "bootstrap-css-only/css/bootstrap.min.css";*/
/*import "mdbreact/dist/css/mdb.css";*/
import { tryRegistration } from "../actions/AuthActions";
import { connect } from "react-redux";

  
class RegistrationForm extends React.Component {
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
     
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }
  
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
  
   const post = this.state.input;

    }

    if(this.validate()){
  
      const post = this.state.input;
      axios.post(`https://rocky-mesa-30385-herokuapp.com/api/registrations/posts`, { post })
      .then(res => {
        console.log('res');
        console.log(res);
        console.log(res.data);

      
  }

      )

}
    
} 
  
  /*validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
  
      if (!input["title"]) {
        isValid = false;
        errors["title"] = "Please enter your title.";
      }
  
      if (!input["body"]) {
        isValid = false;
        errors["body"] = "Please enter your body.";
      }
  
      this.setState({
        errors: errors
      });
  
      return isValid;
  }*/
     
  render() {
    return (
      <div>
        <h1>React Axios Post Request Example - ItSolutionStuff.com</h1>
        <form onSubmit={this.handleSubmit}>
  
          <div className="form-group">
            <label for="title">Title:</label>
            <input 
              type="text" 
              name="title" 
              value={this.state.input.title}
              onChange={this.handleChange}
              className="form-control" 
              placeholder="Enter title" 
              id="title" />
  
              <div className="text-danger">{this.state.errors.title}</div>
          </div>
  
          <div className="form-group">
            <label for="body">Body:</label>
            <textarea 
              name="body"
              value={this.state.input.body} 
              onChange={this.handleChange}
              placeholder="Enter body"
              className="form-control" />
  
              <div className="text-danger">{this.state.errors.body}</div>
          </div>
              
          <input type="submit" value="Submit" className="btn btn-success" />
        </form>
      </div>
    );
  }
}
  


RegistrationForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.register(e);
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      style={{ width: "75%", margin: "auto" }}
    >
      <p className="h5 text-center mb-4">Sign up</p>
      <div className="grey-text">
        <div className="d-flex justify-content-between">
          <MDBInput
            style={{ marginBottom: 0 }}
            name="firstName"
            label="First Name"
            icon="user"
            type="text"
            required
          />
          <MDBInput
            style={{ marginBottom: 0 }}
            name="lastName"
            label="Last Name"
            type="text"
            required
          />
        </div>
        <MDBInput
          name="email"
          label="Your email"
          icon="envelope"
          group
          type="email"
          validate
          error="wrong"
          success="right"
          required
        />
        <MDBInput
          name="address"
          label="You Shipping Address"
          icon="home"
          group
          type="text"
          validate
          error="wrong"
          success="right"
        />
        <MDBInput
          name="password"
          label="Your password"
          icon="lock"
          group
          type="password"
          validate
          required
        />
      </div>
      <div className="text-center">
        <MDBBtn type="submit" color="primary">
          Register
        </MDBBtn>
      </div>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  register: (e) => dispatch(tryRegistration(e.target)),
});

export default connect(null, mapDispatchToProps)(RegistrationForm);
