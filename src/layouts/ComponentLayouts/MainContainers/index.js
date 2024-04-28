import styles from './MainContainers.module.scss';
import ButtonStyles from '~/components/Button';

function MainContent({ children }) {
  if (children && children.type === 'oneRow-fourCol') {
    return (
      <div className={styles.oneRowFourCol_wrapper}>
        <div className={styles.oneRowFourCol_title}>
          <p>{children.title}</p>
        </div>
        <div className={styles.oneRowFourCol_container}>
          {children.data.map((item) => (
            <div key={item.id} className={styles.oneRowFourCol_item}>
              <img src={item.url} alt={item.name} className={styles.oneRowFourCol_img} />
              <h3 className={styles.oneRowFourCol_name}>{item.name}</h3>
              <p className={styles.oneRowFourCol_info}>{item.info}</p>
            </div>
          ))}
        </div>
      </div>
    );
  } else if (children && children.type === 'twoRow-threeCol') {
    return (
      <div className={styles.twoRowThreeCol_wrapper}>
        <div className={styles.twoRowThreeCol_title}>
          <p>{children.title}</p>
        </div>
        <div className={styles.twoRowThreeCol_container}>
          {children.data.map((item) => (
            <div key={item.id} className={styles.twoRowThreeCol_item}>
              <img src={item.url} alt={item.name} className={styles.twoRowThreeCol_img} />
              <div className={styles.twoRowThreeCol_content}>
                <h3 className={styles.twoRowThreeCol_name}>{item.name}</h3>
                <p className={styles.twoRowThreeCol_info}>{item.info}</p>
                <div className={styles.twoRowThreeCol_other}>
                  <ButtonStyles className={styles.twoRowThreeCol_type} text={item.type} isDefault bigSize />
                  <ButtonStyles className={styles.twoRowThreeCol_size} text={item.size} bigSize withOutline />
                </div>
              </div>
            </div>
          ))}
        </div>
        <ButtonStyles text="See more" isDefault />
      </div>
    );
  } else if (children && children.type === 'oneRow-threeCol') {
    return (
      <div className={styles.oneRowThreeCol_wrapper}>
        <div className={styles.oneRowThreeCol_title}>
          <p>{children.title}</p>
        </div>
        <div className={styles.oneRowThreeCol_container}>
          {children.data.map((item) => (
            <div key={item.id} className={styles.oneRowThreeCol_item}>
              <img src={item.url} alt={item.name} className={styles.oneRowThreeCol_img} />
              <div className={styles.oneRowThreeCol_content}>
                <h3 className={styles.oneRowThreeCol_name}>{item.name}</h3>
                <p className={styles.oneRowThreeCol_info}>{item.info}</p>
                <div className={styles.oneRowThreeCol_other}>
                  <ButtonStyles className={styles.oneRowThreeCol_type} text={item.type} isDefault bigSize />
                  <ButtonStyles className={styles.oneRowThreeCol_size} text={item.size} bigSize withOutline />
                </div>
              </div>
            </div>
          ))}
        </div>
        <ButtonStyles text="See more" isDefault />
      </div>
    );
  } else if (children && children.type === 'fourRow-fiveCol') {
    return (
      <div className={styles.fourRowFiveCol_wrapper}>
        <div className={styles.fourRowFiveCol_title}>
          <p>{children.title}</p>
        </div>
        <div className={styles.fourRowFiveCol_container}>
          {children.data.map((item) => (
            <div key={item.id} className={styles.fourRowFiveCol_item}>
              <div className={styles.fourRowFiveCol_content}>
                <h3 className={styles.fourRowFiveCol_name}>{item.name}</h3>
                <p className={styles.fourRowFiveCol_info}>{item.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MainContent;
