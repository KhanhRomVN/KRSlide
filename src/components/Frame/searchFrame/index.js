import styles from './SearchFrame.module.scss';
import ButtonStyles from '~/components/Button';

function SearchFrame({ data }) {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameContainer}>
        {data.map((result) => (
          <div className={styles.frameItem}>
            <ButtonStyles
              text={result.title}
              justText
              colorText="grayText"
              hoverText="blackHoverText"
              size="normalSize"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchFrame;
