import React from 'react';
import styles from './Dropdown.module.scss';
import HeaderFrame from '../Frame/headerFrame';
import HotSearchFrame from '../Frame/hotSearchFrame';
import SearchFrame from '../Frame/searchFrame';

function Dropdown({ data, colorBackground, isDefault = true, frameType }) {
  let dropdownStyles = [];

  if (frameType === 'hotSearchFrame') {
    dropdownStyles.push(styles.dropdownWithAbsolute);
  }
  if (frameType === 'searchFrame') {
    dropdownStyles.push(styles.dropdownWithAbsolute);
  } else {
    dropdownStyles.push(styles.dropdown);
  }

  if (isDefault) {
    dropdownStyles.push(styles.whiteBackground);
    dropdownStyles.push(styles.boxShadow);
  }

  // if (colorBackground) dropdownStyles.push(styles[colorBackground]);

  switch (frameType) {
    case 'HeaderFrame':
      return (
        <div className={dropdownStyles.join(' ')}>
          <div className={styles.overlay}></div>
          <HeaderFrame data={data} />
        </div>
      );
    case 'hotSearchFrame':
      return (
        <div className={dropdownStyles.join(' ')}>
          <div className={styles.overlay}></div>
          <HotSearchFrame data={data} />
        </div>
      );
    case 'searchFrame':
      return (
        <div className={dropdownStyles.join(' ')}>
          <div className={styles.overlay}></div>
          <SearchFrame data={data} />
        </div>
      );
    default:
      break;
  }
}

export default Dropdown;
