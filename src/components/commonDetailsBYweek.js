import * as React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import router from 'umi/router';
import styles from './commonDetails.css';

function DetailsPage({ item = [] }) {
  const { bt, fbsj, slhb, gnyw, hwyw, qygd } = item || {};
  const html1 = { __html: slhb };
  const html2 = { __html: gnyw };
  const html3 = { __html: hwyw };
  const html4 = { __html: qygd };
  return (
    <React.Fragment>
      <NavBar mode="dark" icon={<Icon type="left" />} onLeftClick={() => router.goBack()}>
        详情
      </NavBar>
      <h2 className={styles['title']}>{bt}</h2>
      <div className={styles['top']}>
        <span>发布时间：</span>
        <span>{fbsj}</span>
      </div>
      <img src="http://www.hbydyl.gov.cn/home/img/yuqing-bg1.png" className={styles['imgHr']} />
      <div className={styles['txt']} dangerouslySetInnerHTML={html1} />
      <img src="http://www.hbydyl.gov.cn/home/img/yuqing-bg2.png" className={styles['imgHr']} />
      <div className={styles['txt']} dangerouslySetInnerHTML={html2} />
      <img src="http://www.hbydyl.gov.cn/home/img/yuqing-bg3.png" className={styles['imgHr']} />
      <div className={styles['txt']} dangerouslySetInnerHTML={html3} />
      <img src="http://www.hbydyl.gov.cn/home/img/yuqing-bg4.png" className={styles['imgHr']} />
      <div className={styles['txt']} dangerouslySetInnerHTML={html4} />
    </React.Fragment>
  );
}

export default DetailsPage;
