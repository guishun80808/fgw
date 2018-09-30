import * as React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import router from 'umi/router';
import styles from './commonDetails.css';

function DetailsPage({ item=[] }) {
  const { xmmc, fbrq, xmlx, tzfs, sshy, xmdd, xmyxq, xytzzje, xmbz, content } = item || {};
  const html = { __html: content };
  return (
    <React.Fragment>
      <NavBar mode="dark" icon={<Icon type="left" />} onLeftClick={() => router.goBack()}>
        详情
      </NavBar>
      <p>
        <span>项目名称：</span>
        <span className={styles['tit']}>{xmmc}</span>
      </p>
      <p>
        <span>发布日期：</span>
        {fbrq}
      </p>
      <p>
        <span>项目类型：</span>
        {xmlx}
      </p>
      <p>
        <span>投资方式：</span>
        {tzfs}
      </p>
      <p>
        <span>所属行业：</span>
        {sshy}
      </p>
      <p>
        <span>项目地点：</span>
        {xmdd}
      </p>
      <p>
        <span>项目有效期：</span>
        {xmyxq}
      </p>
      <p>
        <span>拟吸引投资金额：</span>
        {xytzzje}
      </p>
      <p>
        <span>项目标注：</span>
        {xmbz}
      </p>
      <p>
        <span>项目内容描述：</span>
        <div dangerouslySetInnerHTML={html} />
      </p>
    </React.Fragment>
  );
}

export default DetailsPage;
