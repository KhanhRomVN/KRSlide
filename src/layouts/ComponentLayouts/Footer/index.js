import styles from './Footer.module.scss';
import Logo from '~/assets/images/logo';
import ButtonStyles from '~/components/Button';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <div className={styles.top_left}>
            <Logo />
          </div>
          <div className={styles.top_right}>
            <ButtonStyles text="Work with us" isDefault />
            <ButtonStyles text="Suggestion Box" isDefault />
          </div>
        </div>
        <div className={styles.middle}>
          <div className={styles.middle_left}>
            <p className={styles.middle_left_title}>SOCIAL MEDIA</p>
            <div className={styles.middle_left_listIcon}>
              <div className={styles.middle_left_icon}>1</div>
              <div className={styles.middle_left_icon}>1</div>
              <div className={styles.middle_left_icon}>1</div>
              <div className={styles.middle_left_icon}>1</div>
              <div className={styles.middle_left_icon}>1</div>
            </div>
          </div>
          <div className={styles.middle_middle}>
            <div className={styles.middle_middle_content}>
              <div className={styles.middle_middle_content_title}>CONTENT</div>
              <div className={styles.middle_middle_content_list}>
                <div className={styles.middle_middle_content_item}>1</div>
                <div className={styles.middle_middle_content_item}>1</div>
                <div className={styles.middle_middle_content_item}>1</div>
                <div className={styles.middle_middle_content_item}>1</div>
                <div className={styles.middle_middle_content_item}>1</div>
                <div className={styles.middle_middle_content_item}>1</div>
                <div className={styles.middle_middle_content_item}>1</div>
                <div className={styles.middle_middle_content_item}>1</div>
                <div className={styles.middle_middle_content_item}>1</div>
                <div className={styles.middle_middle_content_item}>1</div>
                <div className={styles.middle_middle_content_item}>1</div>
                <div className={styles.middle_middle_content_item}>1</div>
                <div className={styles.middle_middle_content_item}>1</div>
                <div className={styles.middle_middle_content_item}>1</div>
                <div className={styles.middle_middle_content_item}>1</div>
                <div className={styles.middle_middle_content_item}>1</div>
              </div>
            </div>
            <div className={styles.middle_middle_learn}>
              <div className={styles.middle_middle_learn_title}>learn</div>
              <div className={styles.middle_middle_learn_list}>
                <div className={styles.middle_middle_learn_item}>1</div>
                <div className={styles.middle_middle_learn_item}>1</div>
                <div className={styles.middle_middle_learn_item}>1</div>
                <div className={styles.middle_middle_learn_item}>1</div>
                <div className={styles.middle_middle_learn_item}>1</div>
              </div>
            </div>
          </div>
          <div className={styles.middle_right}>
            <div className={styles.middle_right_title}>Help</div>
            <div className={styles.middle_right_list}>
              <div className={styles.middle_right_item}>1</div>
              <div className={styles.middle_right_item}>1</div>
              <div className={styles.middle_right_item}>1</div>
              <div className={styles.middle_right_item}>1</div>
              <div className={styles.middle_right_item}>1</div>
              <div className={styles.middle_right_item}>1</div>
              <div className={styles.middle_right_item}>1</div>
              <div className={styles.middle_right_item}>1</div>
              <div className={styles.middle_right_item}>1</div>
            </div>
          </div>
        </div>
        <div className={styles.bottom}></div>
      </div>
    </div>
  );
}

export default Footer;
