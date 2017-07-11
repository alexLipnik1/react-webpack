import React from 'react';

import * as RB from 'react-bootstrap';
import styles from './Control_panel.scss';

import {findDOMNode} from 'react-dom';

export default class ContorlPanel extends React.Component {
  render() {
    return(
      <div className={styles.body}>
        <div className={styles.container}>

          { /*~~~~~ header ~~~~~*/ }

          <div className={styles.headers}>
            <div>Notification</div>
            <div>SMS</div>
            <div>Email</div>
          </div>

          { /*~~~~~ invoiceOpend ~~~~~*/ }

          <div className={styles.invoiceOpend}>
            <div>Invoice Opened</div>
            <div>
              <input type="checkbox" name="email" />
            </div>
            <div>
              <input type="checkbox" name="SMS" />
            </div>
          </div>

          { /*~~~~~ invoiceClosed ~~~~~*/ }

          <div className={styles.invoiceClosed}>
            <div>Invoice Closed</div>
            <div>
              <input type="checkbox" name="email" />
            </div>
            <div>
              <input type="checkbox" name="SMS" />
            </div>
          </div>

          { /*~~~~~ MoneyTransferd ~~~~~*/ }

          <div className={styles.MoneyTransferd}>
            <div>Money Transferd</div>
            <div>
              <input type="checkbox" name="email" />
            </div>
            <div>
              <input type="checkbox" name="SMS" />
            </div>
          </div>
        </div>

        { /*~~~~~ change ~~~~~*/ }

        <RB.Button>Change</RB.Button>

      </div>
    );
  }
}
