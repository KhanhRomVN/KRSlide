import React from 'react';
import styles from './DefaultLayout.module.scss';

const DefaultLayout = ({ children }) => {
  return <div className={styles.DefaultLayout}>{children}</div>;
};

export default DefaultLayout;
