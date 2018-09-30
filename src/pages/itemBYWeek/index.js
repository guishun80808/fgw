import * as React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { connect } from 'dva';
import router from 'umi/router';
import CommonItem from '../../components/commonItemBYweek';

function ItemPage({ itemBYWeek = [], dispatch, match }) {
  const { list, ImgUrlPath, refreshing } = itemBYWeek || {};

  function handleRefresh() {
    dispatch({
      type: 'itemBYWeek/fetch',
      payload: {},
    });
  }

  function handleClick(id) {
    router.push(`/detailsBYWeek/${id}`);
  }

  return (
    <React.Fragment>
      <NavBar
        mode="dark"
        icon={<Icon type="left" />}
        onLeftClick={() => {
          router.goBack();
        }}
      >
        列表
      </NavBar>
      <CommonItem
        list={list}
        ImgUrlPath={ImgUrlPath}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        onClick={handleClick}
      />
    </React.Fragment>
  );
}

export default connect(function(_) {
  return { itemBYWeek: _.itemBYWeek };
})(ItemPage);
