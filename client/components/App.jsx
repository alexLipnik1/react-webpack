/*
    ./client/components/App.jsx
*/
import React from 'react';

import * as RB from 'react-bootstrap';
import styles from './App.scss';

import {findDOMNode} from 'react-dom';


class Input extends React.Component {
  render(){
    return <div><input ref="input" type="text" onChange={this.props.update}/></div>
  }
}


export default class App extends React.Component {
  state = {
    client: '',
    id: '',
    address: '',
    zip: '',
    phone: '',
    contect: '',
    workDays: '',
    hours: '',
    workType: '',
    payment: '',
    total: '',
    VAT: '',
    totatWithVAT: '',
  }

  update = () => {
    this.setState({

      client: findDOMNode(this.refs.client).value,
      id: findDOMNode(this.refs.id).value,
      address: findDOMNode(this.refs.address).value,
      zip: findDOMNode(this.refs.zip).value,
      phone: findDOMNode(this.refs.phone).value,
      contect: findDOMNode(this.refs.contect).value,
      workDays: findDOMNode(this.fets.workDays).value,
      hours: findDOMNode(this.refs.hours).value,
      workType: findDOMNode(this.refs.workType).value,
      payment: findDOMNode(this.refs.payment).value,
      total: '',
      VAT: '',
      totatWithVAT: '',
    })
  }

  render() {
    return (
    <div className={styles.container}>
      <h1>Invoice order</h1>

      {/* ~~~~~~~~~~~~~ client ~~~~~~~~~~~~~ */}

      <div className={styles.clientDetails}>
        <RB.FormGroup controlId="client">
          <RB.ControlLabel>Client</RB.ControlLabel>{' '}
          <RB.FormControl ref="client" onChange={this.update} type="text" placeholder="Enter client name" />
        </RB.FormGroup>
        <RB.FormGroup controlId="id">
          <RB.ControlLabel>ID</RB.ControlLabel>{' '}
          <RB.FormControl ref="id" onChange={this.update} type="text" placeholder="Enter ID" />
        </RB.FormGroup>
          <RB.FormGroup controlId="address">
          <RB.ControlLabel>Address</RB.ControlLabel>{' '}
          <RB.FormControl ref="address" onChange={this.update} type="text" placeholder="Enter Address" />
        </RB.FormGroup>
        <RB.FormGroup controlId="zip">
          <RB.ControlLabel>ZIP</RB.ControlLabel>{' '}
          <RB.FormControl ref="client" onChange={this.update} type="text" placeholder="Enter ZIP" />
        </RB.FormGroup>
        <RB.FormGroup controlId="phone">
          <RB.ControlLabel>Phone</RB.ControlLabel>{' '}
          <RB.FormControl ref="client" onChange={this.update} type="text" placeholder="Enter phone" />
        </RB.FormGroup>
        <RB.FormGroup controlId="contect">
          <RB.ControlLabel>Contect</RB.ControlLabel>{' '}
          <RB.FormControl ref="client" onChange={this.update} type="text" placeholder="Enter Contect" />
        </RB.FormGroup>
      </div>

      {/* ~~~~~~~ payment ~~~~~~ */}

      <div className={styles.paymentContainer}>
        <div className={styles.payment}>
          <div className={styles.line}>
            <RB.FormGroup controlId="workDays">
              <RB.ControlLabel>Work Days</RB.ControlLabel>{' '}
              <RB.FormControl ref="workDays" onChange={this.update}  type="text" placeholder="" />
            </RB.FormGroup>
            <RB.FormGroup controlId="hours">
              <RB.ControlLabel>Hours</RB.ControlLabel>{' '}
              <RB.FormControl ref="hours" onChange={this.update}  type="text" placeholder="" />
            </RB.FormGroup>
              <RB.FormGroup controlId="workType">
              <RB.ControlLabel>Work type</RB.ControlLabel>{' '}
              <RB.FormControl ref="workType" onChange={this.update}  type="text" placeholder="" />
            </RB.FormGroup>
          </div>
        </div>

        <div className={styles.TotalPayment}>
          <RB.FormGroup className={styles.paymentInput} controlId="paymant">
            <RB.ControlLabel>Paymant</RB.ControlLabel>{' '}
            <RB.FormControl ref="payment" onChange={this.update}  type="text" placeholder="" />
          </RB.FormGroup>
          <RB.FormGroup controlId="finalTotal">
            <RB.ControlLabel>Total</RB.ControlLabel>{' '}
            <RB.FormControl type="text" placeholder="" />
          </RB.FormGroup>
          <RB.FormGroup controlId="VAT">
            <RB.ControlLabel>VAT</RB.ControlLabel>{' '}
            <RB.FormControl type="text" placeholder="" />
          </RB.FormGroup>
          <RB.FormGroup controlId="total+VAT">
            <RB.ControlLabel>Total+VAT</RB.ControlLabel>{' '}
            <RB.FormControl type="text" placeholder="" />
          </RB.FormGroup>
        </div>
      </div>

      {/* ~~~~~~~ submit ~~~~~~ */}

      <div className={styles.Submit}>
        <RB.Button bsStyle="primary" >submit</RB.Button>
      </div>
    </div>);
    }
}
