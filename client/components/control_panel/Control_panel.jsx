import React from 'react';

import * as RB from 'react-bootstrap';
import styles from './Control_panel.scss';

import {findDOMNode} from 'react-dom';

const CreateLine = (props) => (
  <div className={styles.line}>
    <div>{props.name}</div>
    <div>
      <input onChange={props.update} type="checkbox" name="sms" defaultChecked={props.sms} />
    </div>
    <div>
      <input onChange={props.update} type="checkbox" name="email" defaultChecked={props.email}/>
    </div>
  </div>
);

export default class ContorlPanel extends React.Component {

  render(props) {
    return(
      <div className={styles.body}>
        <div className={styles.container}>
          <div className={styles.line}>
            <div>Notification</div>
            <div>SMS</div>
            <div>Email</div>
          </div>

          {
            this.props.lines.map((line, i) =>
              <CreateLine key={Object.values(line)[0]} name={Object.values(line)[1]}
                email={Object.values(line)[2]}
                sms={Object.values(line)[3]} />
              )
          }

        </div>

        <div className={styles.button}>
          <RB.Button bsStyle="primary">Change</RB.Button>
        </div>

    </div>
    );
  }
}
