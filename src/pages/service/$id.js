import * as React from 'react';
import { connect } from 'dva';
import { NavBar, Icon, Steps } from 'antd-mobile';
import styles from './index.css';
import router from 'umi/router';

function ServicePage({ service = [] }) {
  const {
    item: { list = [], fwmc },
    ImgUrlPath,
  } = service || {};
  const ImgUrl = ImgUrlPath.data || {};
  const Step = Steps.Step;
  return (
    <React.Fragment>
      <NavBar mode="dark" icon={<Icon type="left" />} onLeftClick={() => router.push('/home')}>
        {fwmc}
      </NavBar>
      <img src={require('../../assets/serviceBanner.png')} className={styles['banner']} />
      <div className={styles['containerBg']}>
        <div className={styles['title']}>
          <p>
            {fwmc}
            机构
          </p>
        </div>
        <Steps current={list.length-1} className={styles['StepsBox']}>
          {list.map((val, index) => {
            if (val.address) {
              return (
                <Step
                  key={index}
                  title={
                    <span
                      onClick={() => {
                        router.push(`/details/` + [val.id]);
                      }}
                    >
                      {val.jgmc}
                    </span>
                  }
                  icon={<img src={ImgUrl + [val.logo]} className={styles['icon1']} />}
                  description={
                    <div className={styles['description']}>
                      {val.address}
                      <a
                        onClick={() => {
                          router.push(`/details/` + [val.id]);
                        }}
                      >
                        [详情]
                      </a>
                    </div>
                  }
                />
              );
            } else {
              return (
                <Step
                  key={index}
                  title={
                    <span
                      onClick={() => {
                        router.push(`/details/` + [val.id]);
                      }}
                    >
                      {val.jgmc}
                    </span>
                  }
                  icon={<img src={ImgUrl + [val.logo]} className={styles['icon1']} />}
                  description={
                    <div>
                      <br />
                    </div>
                  }
                />
              );
            }
          })}
        </Steps>
      </div>
    </React.Fragment>
  );
}

export default connect(function(_) {
  return { service: _.service };
})(ServicePage);
