import logo from './KRSlides - logo.png';
import styles from './Logo.module.scss';

function Logo() {
  return <img src={logo} alt="logo" className={styles.logo} />;
}

export default Logo;
