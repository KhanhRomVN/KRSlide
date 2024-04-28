import styles from './headerContent.module.scss';
import Tippy from '@tippyjs/react/headless';
import Logo from '~/assets/images/logo';
import SearchBarStyles from '~/components/Searchbar';
import Dropdown from '~/components/Dropdown';
import ButtonStyles from '~/components/Button';
import { FakeHeaderAPI } from './FakeHeaderAPI';

function HeaderContent() {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.LeftContentMenu}>
          <Tippy
            offset={[0, 15]}
            placement="bottom"
            interactive
            render={(attrs) => <Dropdown data={FakeHeaderAPI.Create} frameType="HeaderFrame" />}
          >
            <div className={styles.LeftContentItem}>Create</div>
          </Tippy>
          <Tippy
            offset={[150, 15]}
            placement="bottom"
            interactive
            render={(attrs) => <Dropdown data={FakeHeaderAPI.Explore} frameType="HeaderFrame" />}
          >
            <div className={styles.LeftContentItem}>Explore</div>
          </Tippy>
          <Tippy
            offset={[0, 15]}
            placement="bottom"
            interactive
            render={(attrs) => <Dropdown data={FakeHeaderAPI.AI} frameType="HeaderFrame" />}
          >
            <div className={styles.LeftContentItem}>AI [New]</div>
          </Tippy>
          <Tippy
            offset={[0, 15]}
            placement="bottom"
            interactive
            render={(attrs) => <Dropdown data={FakeHeaderAPI.Learn} frameType="HeaderFrame" />}
          >
            <div className={styles.LeftContentItem}>Learn</div>
          </Tippy>
          <div className={styles.LeftContentItem}>Education</div>
        </div>
      </div>
      <div className={styles.middle}>
        <SearchBarStyles text="OK" />
      </div>
      <div className={styles.right}>
        <div className={styles.RightContentMenu}>
          <Tippy
            offset={[0, 15]}
            placement="bottom"
            interactive
            render={(attrs) => <Dropdown data={FakeHeaderAPI.More} frameType="HeaderFrame" />}
          >
            <div className={styles.RightContentItem}>More</div>
          </Tippy>
          <div className={styles.RightContentItem}>
            <ButtonStyles text="Premium Plans" justText colorText="blueText" hoverText="blackHoverText" />
          </div>
          <div className={styles.RightContentItem}>
            <ButtonStyles text="Log in" blackText_noColorBackground_blackOutline size="bigSize" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderContent;
