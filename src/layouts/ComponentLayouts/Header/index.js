import styles from './Header.module.scss';
import HeaderContent from '~/content/headerContent';
import React, { useState, useEffect } from 'react';

function Header() {
  const [showMiddle, setShowMiddle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 350) {
        setShowMiddle(true);
      } else {
        setShowMiddle(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.wrapper} ${showMiddle ? styles.showMiddle : ''}`}>
      <HeaderContent />
    </div>
  );
}

export default Header;
