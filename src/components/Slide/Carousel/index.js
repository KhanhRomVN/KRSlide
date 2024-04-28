import React, { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import styles from './Carousel.module.scss';
import ArrowPrevSVG from '~/assets/icons/svg/arrow-prev-small-svgrepo-com.svg';
import ArrowNextSVG from '~/assets/icons/svg/arrow-next-small-svgrepo-com.svg';

function Carousel({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPrevNext, setShowPrevNext] = useState(false);
  let timeout;

  const nextSlide = () => {
    const lastIndex = data.length - 1;
    const shouldResetIndex = currentIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    const lastIndex = data.length - 1;
    const shouldResetIndex = currentIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentIndex - 1;
    setCurrentIndex(index);
  };

  const handleMouseEnter = () => {
    clearTimeout(timeout);
    setShowPrevNext(true);
  };

  const handleMouseLeave = () => {
    timeout = setTimeout(() => setShowPrevNext(false), 500); // Chờ 0.5 giây trước khi ẩn nút prev và next
  };

  return (
    <div className={styles.carousel}>
      <div onClick={prevSlide} className={`${styles.prev} ${showPrevNext ? styles.show : ''}`}>
        <img src={ArrowPrevSVG} alt="Previous" />
      </div>
      <div className={styles.slide} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <img src={data[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <div onClick={nextSlide} className={`${styles.next} ${showPrevNext ? styles.show : ''}`}>
        <img src={ArrowNextSVG} alt="Next" />
      </div>
    </div>
  );
}

export default Carousel;
