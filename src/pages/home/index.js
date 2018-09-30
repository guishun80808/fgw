import * as React from 'react';
import { Flex } from 'antd-mobile';
import { connect } from 'dva';
import styles from './index.css';
import Login from './components/login';
import BannerCaro from './components/bannerCaro';
import MsgInter from './components/msgInter';
import ServiceEnter from './components/serviceEnter';
import InforProject from './components/inforProject';
import WeeklyHot from './components/weeklyHot';
import Footer from './components/footer';

function HomePage({ home }) {
  const { banner, msg, zqfw, infor, hot } = home;
  return (
    <React.Fragment>
      <div className={styles['bg']}>
        <Flex>
          <Flex.Item>
            <div className={styles['login']}>
              <Login />
            </div>
          </Flex.Item>
        </Flex>
        <Flex>
          <Flex.Item>
            <div className={styles['banner']}>
              <BannerCaro banner={banner} />
            </div>
          </Flex.Item>
        </Flex>
        <Flex>
          <Flex.Item>
            <div className={styles['msg']}>
              <MsgInter {...msg} />
            </div>
          </Flex.Item>
        </Flex>
        <Flex>
          <Flex.Item>
            <div className={styles['service']}>
              <ServiceEnter zqfw={zqfw} />
            </div>
          </Flex.Item>
        </Flex>
        <Flex>
          <Flex.Item>
            <div className={styles['infor']}>
              <InforProject {...infor} />
            </div>
          </Flex.Item>
        </Flex>
        <Flex>
          <Flex.Item>
            <div className={styles['hot']}>
              <WeeklyHot {...hot} />
            </div>
          </Flex.Item>
        </Flex>
        <Flex>
          <Flex.Item>
            <div className={styles['footer']}>
              <Footer />
            </div>
          </Flex.Item>
        </Flex>
      </div>
    </React.Fragment>
  );
}

export default connect(function(_) {
  return { home: _.home };
})(HomePage);
