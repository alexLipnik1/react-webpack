import React from 'react';

import * as RB from 'react-bootstrap';
import styles from './Control_panel.scss';

import {findDOMNode} from 'react-dom';

const CreateLine = (props) => (
  <div className={styles.line}>
    <div>{props.name}</div>
    {props.line.slice(2).map((c, i) => {
      {
        return (
          <div key={i}>
            {<input onChange={c.update} type="checkbox" defaultChecked={c} />}
          </div>
        )}
      })
    }
  </div>
);

const filterObj = (obj, columns) => {
    var newObj = {};
    for(var i in obj){
      for(var j in columns)
        if(obj[i].hasOwnProperty(columns[j]))
          newObj.columns[j] = Object.values(obj)[i];
    }
    console.log(newObj)


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
            {this.props.columns.slice(1).map((c, i) => {
              return <div key={i}>{c}</div>
            })}
          </div>
          {filterObj(Object.values(this.props.lines)[0], this.props.columns)}

          {
            this.props.lines.map((line, i) =>
              <CreateLine
                key=    {findKeyInObj(Object.values(line), line.id)}
                name=   {findKeyInObj(Object.values(line), line.NotificationName)}
                line =  {Object.values(line)}
                column= {this.props.columns}/>)
          }
        </div>

        <div className={styles.button}>
          <RB.Button bsStyle="primary">Change</RB.Button>
        </div>
    </div>
    );
  }
}
