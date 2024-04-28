import React from 'react';
import styles from './HeaderFrame.module.scss';

function HeaderFrame({ data }) {
  return (
    <div className={styles.frameContainer}>
      {data.map((item, index) => (
        <div key={index} className={styles.frameItem}>
          <h2 className={styles.frameTitle}>{item.title}</h2>
          <div className={styles[item.frame]}>
            {Array.isArray(item.item)
              ? item.item.map((subItem, subIndex) => (
                  <div key={subIndex}>
                    {typeof subItem === 'string' ? (
                      <div>{subItem}</div>
                    ) : (
                      <div>
                        <h3>{subItem.entitle}</h3>
                        <p>{subItem.description}</p>
                      </div>
                    )}
                  </div>
                ))
              : null}
          </div>
        </div>
      ))}
    </div>
  );
}

export default HeaderFrame;
