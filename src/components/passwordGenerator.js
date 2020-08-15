import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import calculate from '../utils/utils'
import Checkbox from '@material-ui/core/Checkbox';
import '../css/passwordGenerator.css';

export default class passwordGenerator extends Component {
  constructor(props){
    super(props);
    this.state={
      show : false,
      checkBox : false,
      password : 'Generated Password'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
  }

  handleChange = (evt,handler) => this.setState({[handler] : evt.target.value})
  handleCheck = (evt,box) => this.setState({[box] : evt.target.checked})
  getPassword = () => {
    let randStr = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    return randStr.substring(0,8);
  }

  render() {
  return (
    <div className="boarder">
      <div className="box">
        <center>
          <p>Suggested Password :</p>
          <h1>{this.state.password}</h1>
        <Button variant="contained" color="primary" onClick={() => this.setState({password : this.getPassword()})}>
          Calculate
        </Button>
        </center>
      </div>
    </div>
  );
  }
}
