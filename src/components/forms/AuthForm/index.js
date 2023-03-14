import React, { Component } from "react";
import cx from "classnames"
import styles from "./AuthForm.module.css";

const initialState = {
    email: "",
    password: "",
    emailValid: true,
    passwordValid: true
}

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {...initialState};
  }
  //functions/////////////////
  handleSubmit = (event) => {
    event.preventDefault();
    const { target } = event;
    console.log(target.email.value);
    console.log(target.password.value);
    this.setState({...initialState})
  };

  handleInput = ({ target: { value, name } }) => this.setState({ [name]: value ,[name +"Valid"]: !value.includes(' ')});

  //render///////////////
  render() {
    const { email, password , emailValid ,passwordValid} = this.state;
    const emailClassName = cx({[styles.invalid]:!emailValid});
    const passwordClassName = cx({[styles.invalid]:!passwordValid});
    
    return (
      <form className={styles.authForm} onSubmit={this.handleSubmit}>
        <input
          type="email"
          placeholder="Email..."
          name="email"
          value={email}
          onChange={this.handleInput}
          className={emailClassName}
        />
        <input
          type="password"
          placeholder="Password..."
          name="password"
          value={password}
          onChange={this.handleInput}
          className={passwordClassName}
        />
        <input type="submit" value="submit" className={styles.submitButton} />
        <br className=""/>
      </form>
    );
  }
}

export default AuthForm;
