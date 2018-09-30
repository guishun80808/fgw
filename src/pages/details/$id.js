import * as React from 'react';
import { connect } from 'dva';
import { NavBar, Icon, Drawer, List } from 'antd-mobile';
import styles from './index.css';
import router from 'umi/router';
import Container from './components/container';

function ServicePage({ details = [], dispatch }) {
  const { fwjgmc } = details || {};
  const { openS, mark, fwfw, jgjj, jdal, fwcp, lxwm } = details || {};
  let liTitle = [
    { mark: 'fwfw', name: '服务范围' },
    { mark: 'jgjj', name: '机构简介' },
    { mark: 'jdal', name: '经典案例' },
    { mark: 'fwcp', name: '服务产品' },
    { mark: 'lxwm', name: '联系我们' },
  ];

  const imgUrl = [
    require('../../assets/serviceIcon1.png'),
    require('../../assets/serviceIcon2.png'),
    require('../../assets/serviceIcon3.png'),
    require('../../assets/serviceIcon4.png'),
    require('../../assets/serviceIcon5.png'),
  ];

  const sidebar = (
    <List>
      {liTitle.map((val, index) => {
        return (
          <List.Item key={index} thumb={imgUrl[index]}>
            <div
              onClick={() => {
                dispatch({
                  type: 'details/showItem',
                  payload: val.mark,
                });
              }}
            >
              {val.name}
            </div>
          </List.Item>
        );
      })}
    </List>
  );

  function onOpenChange() {
    dispatch({
      type: 'details/changeOpen',
      payload: { openS: openS },
    });
  }
  return (
    <React.Fragment>
      <div>
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={() => router.goBack()}
          rightContent={[<Icon key="1" type="ellipsis" onClick={onOpenChange} />]}
        >
          {fwjgmc}
        </NavBar>
        <Drawer
          className={styles['my-drawer']}
          style={{ minHeight: document.documentElement.clientHeight - 42 }}
          enableDragHandle
          sidebar={sidebar}
          open={openS}
          onOpenChange={onOpenChange}
          position={'right'}
        >
          <Container mark={mark} {...details} />
        </Drawer>
      </div>
    </React.Fragment>
  );
}

export default connect(function(_) {
  return { details: _.details };
})(ServicePage);
