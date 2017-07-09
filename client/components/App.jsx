/*
    ./client/components/App.jsx
*/
import React from 'react';

import * as RB from 'react-bootstrap';
import styles from './App.scss';

import {findDOMNode} from 'react-dom';

const paymentBlock = () => {
  <div>hello</div>
}

const AppInput = (props) => (
  <RB.FormGroup controlId={props.Id}>
    <RB.ControlLabel>{props.Id}</RB.ControlLabel>{' '}
    <RB.FormControl onChange={props.update} type="text" placeholder={props.placeholder} />
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
    total: '',
    VAT: '',
    totatWithVAT: '',
  }

  update = (key, e) => {
    console.log(e.target.value);
    this.setState({
      [key]: e.target.value,
    })
  }

  render() {
    return (
    <div className={styles.container}>
      <h1>Invoice order</h1>

      {/* ~~~~~~~~~~~~~ client ~~~~~~~~~~~~~ */}

      <div className={styles.clientDetails}>
        <AppInput Id="client" update={e => this.update('client', e)} placeholder="Enter client name" />
        <AppInput Id="id" update={e => this.update('id', e)} placeholder="Enter ID" />
        <AppInput Id="address" update={e => this.update('address', e)} placeholder="Enter address" />
        <AppInput Id="zip" update={e => this.update('zip', e)} placeholder="Enter ZIP" />
        <AppInput Id="phone" update={e => this.update('phone', e)} placeholder="Enter phone number" />
        <AppInput Id="contect" update={e => this.update('contect', e)} placeholder="Enter contect" />
      </div>

      {/* ~~~~~~~ payment ~~~~~~ */}

      <div className={styles.paymentContainer}>
        <div className={styles.payment}>
          <div className={styles.line}>
            <AppInput Id="Work-Days" update={e => this.update('workDays', e)} placeholder="" />
            <AppInput Id="Hours" update={e => this.update('hours', e)} placeholder="" />
            <AppInput Id="Work-Type" update={e => this.update('workType', e)} placeholder="" />
            <AppInput Id="Paymant" update={e => this.update('paymant', e)} placeholder="" />
          </div>
        </div>

        <div className={styles.TotalPayment}>
          <AppInput Id="Total" update={e => this.update('total', e)} placeholder="" />
          <AppInput Id="VAT" update={e => this.update('total', e)} placeholder="" />
          <AppInput Id="Total+VAT" update={e => this.update('total', e)} placeholder="" />
        </div>
      </div>

      {/* ~~~~~~~ submit ~~~~~~ */}

      <div className={styles.Submit}>
        <RB.Button bsStyle="primary" >submit</RB.Button>
      </div>
    </div>);
    }
}
