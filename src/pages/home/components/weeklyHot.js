import * as React from 'react';
import { Tabs } from 'antd-mobile';
import styles from './weeklyHot.css';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Link from 'umi/link';
import router from 'umi/router';

function WeekPage({ images, policyImages }) {
  const tabs = [{ title: '每周热点' }, { title: '政策图解' }];
  return (
    <React.Fragment>
      <div>
        <Tabs tabs={tabs} initialPage={0}>
          <div>
            <ImageGallery
              items={images}
              showPlayButton={false}
              showFullscreenButton={false}
              showThumbnails={false}
              renderItem={({ original, id }) => (
                <Link to={`/detailsBYWeek/${id}`}>
                  <img src={original} />
                </Link>
              )}
            />
            <p
              className={styles['more']}
              onClick={images => {
                router.push(`/itemBYWeek`);
              }}
            >
              +查看更多
            </p>
          </div>
          <div>
            <ImageGallery
              items={policyImages}
              showPlayButton={false}
              showFullscreenButton={false}
              showThumbnails={false}
              renderItem={({ original, id }) => (
                <Link to={`/detailsBYZCTJ/${id}`}>
                  <img src={original} />
                </Link>
              )}
            />
            <p
              className={styles['more']}
              onClick={policyImages => {
                router.push(`/itemBYZCTJ`);
              }}
            >
              +查看更多
            </p>
          </div>
        </Tabs>
      </div>
    </React.Fragment>
  );
}

export default WeekPage;
