/*
    ./client/components/App.jsx
*/
import React from 'react';

import * as RB from 'react-bootstrap';
import styles from './App.scss';

export default class App extends React.Component {
  render() {
    return (
     <div className={styles.container}>
        <h1>Invoice order</h1>
        <div className={styles.clientDetails}>
          <RB.FormGroup controlId="client">
            <RB.ControlLabel>Client</RB.ControlLabel>
            {' '}
            <RB.FormControl type="text" placeholder="Enter client name" />
          </RB.FormGroup>

          <RB.FormGroup controlId="id">
            <RB.ControlLabel>ID</RB.ControlLabel>
            {' '}
            <RB.FormControl type="text" placeholder="Enter ID" />
          </RB.FormGroup>

          <RB.FormGroup controlId="address">
            <RB.ControlLabel>Address</RB.ControlLabel>
            {' '}
            <RB.FormControl type="text" placeholder="Enter Address" />
          </RB.FormGroup>

          <RB.FormGroup controlId="zip">
            <RB.ControlLabel>ZIP</RB.ControlLabel>
            {' '}
            <RB.FormControl type="text" placeholder="Enter ZIP" />
          </RB.FormGroup>

          <RB.FormGroup controlId="phone">
            <RB.ControlLabel>Phone</RB.ControlLabel>
            {' '}
            <RB.FormControl type="text" placeholder="Enter phone" />
          </RB.FormGroup>

          <RB.FormGroup controlId="contect">
            <RB.ControlLabel>Contect</RB.ControlLabel>
            {' '}
            <RB.FormControl type="text" placeholder="Enter Contect" />
          </RB.FormGroup>
        </div>

        <div className={styles.payment}>
          <div className={styles.line}>
            <RB.FormGroup controlId="workDays">
              <RB.ControlLabel>Work days</RB.ControlLabel>
              {' '}
              <RB.FormControl type="text" placeholder="" />
            </RB.FormGroup>

            <RB.FormGroup controlId="hours">
              <RB.ControlLabel>Hours</RB.ControlLabel>
              {' '}
              <RB.FormControl type="text" placeholder="" />
            </RB.FormGroup>

            <RB.FormGroup controlId="workType">
              <RB.ControlLabel>Work type</RB.ControlLabel>
              {' '}
              <RB.FormControl type="text" placeholder="" />
            </RB.FormGroup>

            <RB.FormGroup className={styles.paymentInput} controlId="paymant">
              <RB.ControlLabel>Paymant</RB.ControlLabel>
              {' '}
              <RB.FormControl type="text" placeholder="" />
            </RB.FormGroup>
          </div>

          <div className={styles.TotalPayment}>
            <RB.FormGroup controlId="finalTotal">
              <RB.ControlLabel>Total</RB.ControlLabel>
              {' '}
              <RB.FormControl type="text" placeholder="" />
            </RB.FormGroup>

            <RB.FormGroup controlId="VAT">
              <RB.ControlLabel>VAT</RB.ControlLabel>
              {' '}
              <RB.FormControl type="text" placeholder="" />
            </RB.FormGroup>

            <RB.FormGroup controlId="total+VAT">
              <RB.ControlLabel>Total+VAT</RB.ControlLabel>
              {' '}
              <RB.FormControl type="text" placeholder="" />
            </RB.FormGroup>
          </div>

          <div className={styles.Submit}>
            <RB.Button bsStyle="primary">submit</RB.Button>
          </div>
        </div>
      </div>);
  }
}
