import * as React from 'react';
import { Carousel } from 'antd-mobile';
import styles from './bannerCaro.css';
import router from 'umi/router';

function BannerPage({ banner }) {
  return (
    <React.Fragment>
      <Carousel
        frameOverflow="visible"
        cellSpacing={10}
        slideWidth={0.8}
        autoplay="false"
        infinite
        className={styles['space-carousel']}
      >
        {banner.map((val, index) => (
          <a
            key={index}
            className={styles['txtBox']}
            style={{
              display: 'block',
              position: 'relative',
              top: 0,
              height: 176,
            }}
            onClick={() => {
              router.push(`/detailsBYBanner/` + [val.id]);
            }}
          >
            <span className={styles['txt']}>{val.txt}</span>
            <img
              src={val.imgUrl}
              alt=""
              style={{ width: '100%', verticalAlign: 'top', height: '210px' }}
              onLoad={() => {
                window.dispatchEvent(new Event('resize'));
              }}
            />
          </a>
        ))}
      </Carousel>
    </React.Fragment>
  );
}

export default BannerPage;
