import React, { Component } from 'react'

export default class Reset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
    this.handlesubmit = this.handlesubmit.bind(this);
  }
  handlesubmit(e){
    e.preventDefault();
    const{ email } = this.state;
    console.log(email);
    fetch("http://localhost:5000/forgot-password", {
      method:"post",
      crossDomain: true,
      headers:{
        "Content-Type":"application/json",
        "Accept": "application/json",
        "access-control-allow-origin": "*",
    },
      body:JSON.stringify({
        email,
      }),
     })
     .then((res)=> res.json())
     .then((data) => {
      console.log( data, "userRegister");
      alert(data.status);
    });
}
render() {
    return (
  <form onSubmit={this.handlesubmit}>
    <h3>Forget Password</h3>

    <div className="mb-3">
      <label>Email address</label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter email"
        onChange={(e)=>this.setState({ email:e.target.value })}
      />
    </div>
    <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
        <a href="/sign-up">Sign Up</a>
        </p>
      </form>
    );
  }
}