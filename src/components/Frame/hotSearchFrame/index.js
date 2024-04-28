import styles from './HotSearchFrame.module.scss';
import ButtonStyles from '~/components/Button';

function HotSearchFrame({ data }) {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameContainer}>
        <h2 className={styles.frameTitle}>{data.topSearch[0].title}</h2>
        <div className={styles[data.topSearch[0].frame]}>
          {data.topSearch[0].item.map((subItem, subIndex) => (
            <ButtonStyles key={subIndex} text={subItem} grayText_noColorBackground_grayOutline size="normalSize" />
          ))}
        </div>
      </div>
      <div className={styles.frameContainer}>
        <h2 className={styles.frameTitle}>{data.trendingSearch[0].title}</h2>
        <div className={styles[data.trendingSearch[0].frame]}>
          {data.trendingSearch[0].item.map((subItem, subIndex) => (
            <div key={subIndex} className={styles.frameItem}>
              <div className={styles.frameImage}>
                <img src={subItem.imageURL} alt={subIndex} />
              </div>
              <div className={styles.frameContent}>
                <h1 className={styles.frameName}>{subItem.name}</h1>
                <p className={styles.frameInfo}>{subItem.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HotSearchFrame;
