import React, { Component } from 'react';

import styles from './layout.module.css';

class Layout extends Component {
  children:any;

  constructor (props:any) {
    super(props);
    const { children } = props;
    this.children = children;
  }

  render () {
    return (
      <div className={styles.container}>
        <div>布局</div>
        {this.children}
      </div>
    );
  }
}

export default Layout;
