import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from "classnames"
import styles from "./TelephoneForm.module.css"
const defaultState = {
    name:"",
    phone:"",
    nameValid:true,
    phoneValid:true
}
const phoneReg = new RegExp(`^[/+]?[(]?[0-9]{3}[)]?[-/s/.]?[0-9]{3}[-/s/.]?[0-9]{4,6}$`)
const nameReg = new RegExp('^[a-z0-9_-]{3,15}$')
class TelephoneForm extends Component {
    constructor(props){
        super(props);
        this.state ={
            ...defaultState
        }
    }
    sendUserData = (event) =>{ 
        event.preventDefault()
        const {target:{name,phone}} = event
        if (this.state.nameValid === true && this.state.phoneValid === true) {
            console.log("User name :",name.value," ","Phone :",phone.value);
            this.setState({...defaultState})
        }
        else{
            console.log("error");
        }
    }
    inputHandler = ({target:{value,name}}) => {
        if (name === "name") {
            this.setState({[name]:value,[name+"Valid"]:!nameReg.test(value)})
        }
        if (name === "phone") {
            this.setState({[name]:value,[name+"Valid"]:phoneReg.test(value)})
        }
    }

    render() {
        const {name,phone,nameValid,phoneValid} = this.state
        const {id} = this.props

        const nameClassName = cx(styles.inputs,{[styles.invalid]:!nameValid})
        const phoneClassName = cx(styles.inputs,{[styles.invalid]:!phoneValid})
        return (
            <>
                <form onSubmit={this.sendUserData} className={styles.telephoneForm}>
                    <input type="text" placeholder='Name' name="name" value={name} onChange={this.inputHandler} className={nameClassName}/>
                    <input type="phone" placeholder='Phone number' name='phone' value={phone} onChange={this.inputHandler} className={phoneClassName}/>
                    <input type="submit" value="Send" className={styles.submitButton} id={id}/>
                </form>
            </>
        );
    }
}

TelephoneForm.propTypes = {

    id: PropTypes.number.isRequired,
    name: PropTypes.string,
  };

export default TelephoneForm;

