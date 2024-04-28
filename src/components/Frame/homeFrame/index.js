import React from 'react';
import styles from './HomeFrame.module.scss';
import Carousel from '~/components/Slide/Carousel';

function HomeFrame({ data }) {
  const items = data[0];
  switch (items.frame) {
    case '_1_row_4_col':
      return (
        <div className={styles.frameWrapper}>
          <h1 className={styles.frameTitle}>{items.title}</h1>
          <div className={styles[items.frame]}>
            {items.item.map((subItem, subIndex) => (
              <div key={subIndex} className={styles.frameItem}>
                <div className={styles.frameImage}>
                  <img src={subItem.imageURL} alt="none" />
                </div>
                <div className={styles.frameContent}>
                  <p className={styles.frameName}>{subItem.name}</p>
                  <p className={styles.frameInfoNumber}>{subItem.info_number}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    case '_2_row_3_col':
      return (
        <div className={styles.frameWrapper}>
          <h1 className={styles.frameTitle}>{items.title}</h1>
          <div className={styles[items.frame]}>
            {items.item.map((subItem, subIndex) => (
              <div key={subIndex} className={styles.frameItem}>
                <div className={styles.frameImage}>
                  <Carousel data={subItem.imageList} />
                </div>
                <div className={styles.frameContent}>
                  <p className={styles.frameName}>{subItem.name}</p>
                  <p className={styles.frameDesciption}>{subItem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    case '_1_row_3_col':
      return (
        <div className={styles.frameWrapper}>
          <h1 className={styles.frameTitle}>{items.title}</h1>
          <div className={styles[items.frame]}>
            {items.item.map((subItem, subIndex) => (
              <div key={subIndex} className={styles.frameItem}>
                <div className={styles.frameImage}>
                  <img src={subItem.imageURL} alt="none" />
                </div>
                <div className={styles.frameContent}>
                  <p className={styles.frameName}>{subItem.name}</p>
                  <p className={styles.frameDesciption}>{subItem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    default:
      return <h1>Other...</h1>;
  }
}

export default HomeFrame;
