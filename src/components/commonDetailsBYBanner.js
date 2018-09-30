import * as React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import router from 'umi/router';
import styles from './commonDetails.css';

function DetailsPage({ item = [] }) {
  const { xqbt, xqly, xqsj, xqnr } = item[0] || {};
  const html = { __html: xqnr };
  return (
    <React.Fragment>
      <NavBar mode="dark" icon={<Icon type="left" />} onLeftClick={() => router.goBack()}>
        详情
      </NavBar>
      <h2 className={styles['title']}>{xqbt}</h2>
      <div className={styles['top']}>
        <span>发布时间：</span>
        <span>{xqsj}</span>
        <span>来源：</span>
        <span>{xqly}</span>
      </div>
      <div className={styles['txt']} dangerouslySetInnerHTML={html} />
    </React.Fragment>
  );
}

export default DetailsPage;
