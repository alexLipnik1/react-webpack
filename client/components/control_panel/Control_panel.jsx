import React from 'react';

import * as RB from 'react-bootstrap';
import styles from './Control_panel.scss';

import {findDOMNode} from 'react-dom';

const CreateLine = (props) => (
  <div className={styles.line}>
    <div>{props.name}</div>
    {props.columns.slice(2).map((c, i) => {
      {
        return (
           <div key={i}>
            {console.log(c)}
            <input onChange={c.update} type="checkbox" defaultChecked={c} />
          </div>
        )}
      })
    }

    {/*
    {props.display_email && <div>
      <input onChange={props.update} type="checkbox" name="email" defaultChecked={props.email}/>
    </div>}
    {props.display_fax && <div>
      <input onChange={props.update} type="checkbox" name="fax" defaultChecked={props.fax}/>
    </div>}*/}
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
            {this.props.columns.map((c, i) => {
              return <div key={i}>{c}</div>
            })}
          </div>
          {console.log(Object.values(this.props.lines)[0])}
          {
            this.props.lines.map((line, i) =>
              <CreateLine
                key=           {findKeyInObj(Object.values(line), line.id)}
                name=          {findKeyInObj(Object.values(line), line.NotificationName)}
                columns =      {Object.values(line)}/>)
          }
        </div>

        <div className={styles.button}>
          <RB.Button bsStyle="primary">Change</RB.Button>
        </div>
    </div>
    );
  }
}
