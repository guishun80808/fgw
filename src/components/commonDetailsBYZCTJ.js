import * as React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import router from 'umi/router';
import styles from './commonDetails.css';

function DetailsPage({ item = [], ImgUrlPath = [] }) {
  const { title, published, source, xqimg } = item || {};
  const ImgUrl = ImgUrlPath.data || {};
  return (
    <React.Fragment>
      <NavBar mode="dark" icon={<Icon type="left" />} onLeftClick={() => router.goBack()}>
        详情
      </NavBar>
      <h2 className={styles['title']}>{title}</h2>
      <div className={styles['top']}>
        <span>发布时间：</span>
        <span>{published}</span>
        <span>来源：</span>
        <span>{source}</span>
      </div>
      <img src={ImgUrl + xqimg} className={styles['fullImg']} />
    </React.Fragment>
  );
}

export default DetailsPage;
