// import clsx from 'clsx';
import styles from './Home.module.scss';
import SearchBarStyles from '~/components/Searchbar';
import ButtonStyles from '~/components/Button';
import HomeContent from '~/content/homeContent';
import Tippy from '@tippyjs/react/headless';
import Dropdown from '~/components/Dropdown';
import { FakeSearchDropAPI } from '~/components/Searchbar/FakeSearchDropAPI';
import Carousel from '~/components/Slide/Carousel';
import { FakeHomeAPI } from '~/content/homeContent/fakeHomeAPI';

function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.HeaderForHome}>
        <p className={styles.head_title}>Create engaging presentations, faster</p>
        <p className={styles.head_slogan}>Free templates for Google Slides and PowerPoint</p>
        <SearchBarStyles isDefault bigSize />
        <div className={styles.head_desc}>
          <p>Or kick off your next project with</p>
          <ButtonStyles
            href="/"
            text="AI presentation maker"
            blueText_noColorBackground_blueOutline
            hoverBackground="blueHoverBackground"
            hoverText="whiteHoverText"
            size="normalSize"
          />
        </div>
      </div>
      <div className={styles.HomeContent}>
        <HomeContent />
      </div>
    </div>
  );
}

export default Home;
