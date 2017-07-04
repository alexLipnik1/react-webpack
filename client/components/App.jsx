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
          <form className={styles.client}>
            <RB.FormGroup controlId="formInlineName">
              <RB.ControlLabel>Client</RB.ControlLabel>
              {' '}
              <RB.FormControl type="text" placeholder="Enter client name" />
            </RB.FormGroup>

            <RB.FormGroup controlId="formInlineName">
              <RB.ControlLabel>ID</RB.ControlLabel>
              {' '}
              <RB.FormControl type="text" placeholder="Enter ID" />
            </RB.FormGroup>

            <RB.FormGroup controlId="formInlineName">
              <RB.ControlLabel>Address</RB.ControlLabel>
              {' '}
              <RB.FormControl type="text" placeholder="Enter Address" />
            </RB.FormGroup>

            <RB.FormGroup controlId="formInlineName">
              <RB.ControlLabel>ZIP</RB.ControlLabel>
              {' '}
              <RB.FormControl type="text" placeholder="Enter ZIP" />
            </RB.FormGroup>

            <RB.FormGroup controlId="formInlineName">
              <RB.ControlLabel>Phone</RB.ControlLabel>
              {' '}
              <RB.FormControl type="text" placeholder="Enter phone" />
            </RB.FormGroup>

            <RB.FormGroup controlId="formInlineName">
              <RB.ControlLabel>Contect</RB.ControlLabel>
              {' '}
              <RB.FormControl type="text" placeholder="Enter Contect" />
            </RB.FormGroup>
          </form>
        </div>
      </div>);
  }
}
