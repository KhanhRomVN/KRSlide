import styles from './HomeContent.module.scss';
import { FakeHomeAPI } from './fakeHomeAPI';
import HomeFrame from '~/components/Frame/homeFrame';

function HomeContent() {
  return (
    <div className={styles.homeWrapper}>
      <div className={styles.homeContainer}>
        <div className={styles.homeItem}>
          <HomeFrame data={FakeHomeAPI.trendingSearch} />
        </div>
        <div className={styles.homeItem}>
          <HomeFrame data={FakeHomeAPI.lastestThemes} />
        </div>
        <div className={styles.homeItem}>
          <HomeFrame data={FakeHomeAPI.popularThemes} />
        </div>
        <div className={styles.homeItem}>
          <HomeFrame data={FakeHomeAPI.infographic} />
        </div>
        <div className={styles.homeItem}>
          <HomeFrame data={FakeHomeAPI.educationPresentationTemplates} />
        </div>
        <div className={styles.homeItem}>
          <HomeFrame data={FakeHomeAPI.interactivAnimated} />
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
