/*
    ./client/components/App.jsx
*/
import React from 'react';

import styles from './App.scss';

export default class App extends React.Component {
  render() {
    return (
     <div className={styles.container}>
        <h1>Invoice order</h1>
        <div className={styles.inputsPartA}>
          <input type="text" placeholder="id1" />
          <input type="text" placeholder="id2" />
          <input type="text" placeholder="id3" />
          <input type="text" placeholder="id4" />
        </div>
        <div clssName={styles.iputsPartB}>
          <input type="text" placeholder="id1" />
          <input type="text" placeholder="id2" />
          <input type="text" placeholder="id3" />
        </div>
      </div>);
  }
}
