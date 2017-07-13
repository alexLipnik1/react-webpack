import React from 'react';

import * as RB from 'react-bootstrap';
import styles from './Control_panel.scss';

import {findDOMNode} from 'react-dom';

const CreateLine = (props) => (
  <div className={styles.line}>
    <div>{props.name}</div>
    {props.display_sms && <div >
      <input onChange={props.update} type="checkbox" name="sms" defaultChecked={props.sms} />
    </div>}
    {props.display_email && <div>
      <input onChange={props.update} type="checkbox" name="email" defaultChecked={props.email}/>
    </div>}
    {props.display_fax && <div>
      <input onChange={props.update} type="checkbox" name="fax" defaultChecked={props.fax}/>
    </div>}
  </div>
);

const displayCheck = (arr, str) => {
  return arr.filter(v => str === v)[0] === str;
}

const findKeyInObj = (arr, str) => {
  return arr.filter(v => str === v)[0];
}

export default class ContorlPanel extends React.Component {
  render(props) {
    return(
      <div className={styles.body}>
        <div className={styles.container}>
          <div className={styles.line}>
            <div>Notification</div>
            {displayCheck(this.props.columns, 'sms') && <div>SMS</div>}
            {displayCheck(this.props.columns, 'email') && <div>Email</div>}
            {displayCheck(this.props.columns, 'fax') && <div>Fax</div>}
          </div>

          {console.log(displayCheck(this.props.columns, 'sms'))}
          {
            this.props.lines.map((line, i) =>
              <CreateLine
                display_email={displayCheck(this.props.columns, 'email')}
                display_sms=  {displayCheck(this.props.columns, 'sms')}
                display_fax=  {displayCheck(this.props.columns, 'fax')}
                key=    {findKeyInObj(Object.values(line), line.id)}
                name=   {findKeyInObj(Object.values(line), line.NotificationName)}
                email=  {findKeyInObj(Object.values(line), line.email)}
                sms=    {findKeyInObj(Object.values(line), line.sms)}
                fax=    {findKeyInObj(Object.values(line), line.fax)} />)
          }
        </div>

        <div className={styles.button}>
          <RB.Button bsStyle="primary">Change</RB.Button>
        </div>
    </div>
    );
  }
}
