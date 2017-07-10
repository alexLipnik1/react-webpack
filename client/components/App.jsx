/*
    ./client/components/App.jsx
*/
import React from 'react';

import * as RB from 'react-bootstrap';
import styles from './App.scss';

import {findDOMNode} from 'react-dom';

const PaymentBlock = ({update}) => (
  <div className={styles.PaymentBlock}>
    <AppInput Id="workDays" update={(...args) => update('workDays', ...args)} placeholder="" />
    <AppInput Id="hours"     update={(...args) => update('hours', ...args)}    placeholder="" />
    <AppInput Id="workType" update={(...args) => update('workType', ...args)} placeholder="" />
    <AppInput Id="payment"   update={(...args) => update('payment', ...args)}  placeholder="" />
  </div>
);

const AppInput = (props) => (
  <RB.FormGroup controlId={props.Id}>
    <RB.ControlLabel>{props.flag ? props.Id : ""}</RB.ControlLabel>{' '}
    <RB.FormControl value={props.value} onChange={props.update} type="text" placeholder={props.placeholder} />
  </RB.FormGroup>
);

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
    totalValue: '',
    VATValue: '',
    TotalPlusValue: '',
  }

  update = (key, e) => {
    console.log(e.target.value);
    this.setState({
      [key]: e.target.value,
    }, () => {console.log(this.state)})
  }

  render() {
    return (
    <div className={styles.container}>
      <h1>Invoice order</h1>

      {/* ~~~~~~~ client ~~~~~~~ */}

      <div className={styles.clientDetails}>
        <AppInput flag="1" Id="Client" update={e => this.update('client', e)} placeholder="Enter client name" />
        <AppInput flag="1" Id="ID" update={e => this.update('id', e)} placeholder="Enter ID" />
        <AppInput flag="1" Id="Address" update={e => this.update('address', e)} placeholder="Enter address" />
        <AppInput flag="1" Id="ZIP" update={e => this.update('zip', e)} placeholder="Enter ZIP" />
        <AppInput flag="1" Id="Phone" update={e => this.update('phone', e)} placeholder="Enter phone number" />
        <AppInput flag="1" Id="Contect" update={e => this.update('contect', e)} placeholder="Enter contect" />
      </div>

      {/* ~~~~~~~ payment ~~~~~~~ */}

      <div className={styles.paymentContainer}>
        <div className={styles.payment}>
          <div className={styles.paymentLabels}>
            <label>Work days</label>
            <label>Hours</label>
            <label>Work Type</label>
            <label>Payment</label>
          </div>
          <PaymentBlock update={this.update} />
          <PaymentBlock update={this.update} />
        </div>

        <div className={styles.TotalPayment}>
          <AppInput flag="1" Id="Total" value={this.state.totalValue} update={e => this.update('total', e)} placeholder="" />
          <AppInput flag="1" Id="VAT" value={this.state.totalValue ? (this.state.totalValue / 100)*17 : '' } update={e => this.update('VAT', e)} placeholder="" />
          <AppInput flag="1" Id="Total+VAT" value={this.state.totalValue ? (this.state.totalValue / 100)*117 : '' } update={e => this.update('total+VAT', e)} placeholder="" />
        </div>
      </div>

      {/* ~~~~~~~ submit ~~~~~~~ */}

      <div className={styles.Submit}>
        <RB.Button bsStyle="primary" >submit</RB.Button>
      </div>
    </div>);
    }
}
