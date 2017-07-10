/*
    ./client/components/App.jsx
*/
import React from 'react';

import * as RB from 'react-bootstrap';
import styles from './App.scss';

import {findDOMNode} from 'react-dom';


const PaymentBlock = ({update, values={}}) => (
  <div className={styles.paymentBlock}>
    <AppInput update={(...args) => update('workDays', ...args)} value={values.workDays || ''} isNumber />
    <AppInput update={(...args) => update('hours',    ...args)} value={values.hours || ''}    isNumber />
    <AppInput update={(...args) => update('workType', ...args)} value={values.workType || ''} />
    <AppInput update={(...args) => update('payment',  ...args)} value={values.payment || ''}  isNumber />
  </div>
);

const AppInput = (props) => (
  <RB.FormGroup>
    <RB.FormControl
      value={props.value}
      onChange={e => props.update(props.isNumber ? parseFloat(e.target.value) : e.target.value)}
      type={props.isNumber ? "number" : "text"}
      placeholder={props.placeholder} />
  </RB.FormGroup>
);

const checkIfEmpty = ({id, ...rest}) => Object.values(rest).reduce((acc, v) => acc || v, false)

export default class App extends React.Component {
  state = {
    client: '',
    id: '',
    address: '',
    zip: '',
    phone: '',
    contect: '',
    lines: [ { id: 0 } ],
    totalValue: '',
  }

  lineId = 1

  updateLine = (lineIndex, key, v) => {
    this.setState({
      lines: [
        ...this.state.lines.map(
          (line, i) => i==lineIndex ? {...line, [key]: v} : line
        ).filter(checkIfEmpty),
        { id: this.lineId++ },
      ]
    });
  }

  update = (key, v) => {
    this.setState({
      [key]: v,
    })
  }



  render() {
    const totalValue = this.state.lines.map(line => line.payment || 0).reduce((acc, v) => acc + v, 0);

    return (
    <div className={styles.container}>
      <h1>Invoice order</h1>

      {/* ~~~~~~~ client ~~~~~~~ */}

      <div className={styles.clientDetails}>
        <AppInput update={e => this.update('client', e)}  placeholder="Enter client name" />
        <AppInput update={e => this.update('id', e)}      placeholder="Enter ID" />
        <AppInput update={e => this.update('address', e)} placeholder="Enter address" />
        <AppInput update={e => this.update('zip', e)}     placeholder="Enter ZIP" />
        <AppInput update={e => this.update('phone', e)}   placeholder="Enter phone number" />
        <AppInput update={e => this.update('contect', e)} placeholder="Enter contact" />
      </div>

      {/* ~~~~~~~ payment ~~~~~~~ */}

      <div className={styles.paymentContainer}>

        <div className={styles.titles}>
          <div>Work days</div>
          <div>Hours</div>
          <div>Work type</div>
          <div>Payment</div>
        </div>
        <div className={styles.lines}>
        {
          this.state.lines.map((line, i) => <PaymentBlock key={i} update={(...args) => this.updateLine(i, ...args)} values={line} />)
        }
        </div>

        <div className={styles.totalPayment}>
          <AppInput Id="Total" value={totalValue} update={e => this.update('total', e)} placeholder="" />
          <AppInput Id="VAT" value={(totalValue / 100) * 17} update={e => this.update('VAT', e)} placeholder="" />
          <AppInput Id="Total+VAT" value={(totalValue / 100) * 117} update={e => this.update('total+VAT', e)} placeholder="" />
        </div>
      </div>

      {/* ~~~~~~~ submit ~~~~~~~ */}

      <div className={styles.submit}>
        <RB.Button bsStyle="primary" >submit</RB.Button>
      </div>
    </div>);
    }
}
