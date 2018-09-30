import * as React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { connect } from 'dva';
import router from 'umi/router';
import CommonItem from '../../components/commonItemBYInfor';

function ItemPage({ itemBYInfor, dispatch, match }) {
  const { list, refreshing } = itemBYInfor;

  function handleRefresh() {
    const { params: { type } } = match;
    dispatch({
      type: 'itemBYInfor/fetch',
      payload: {
        type: type,
      },
    });
  }

  function handleClick(id) {
    router.push(`/detailsBYInfor/${id}`);
  }

  return (
    <React.Fragment>
      <NavBar
        mode="dark"
        icon={<Icon type="left" />}
        onLeftClick={() => { router.goBack() }}
      >
        列表
      </NavBar>
      <CommonItem
        list={list}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        onClick={handleClick}
      />
    </React.Fragment>
  );
}

export default connect(function (_) {
  return { itemBYInfor: _.itemBYInfor };
})(ItemPage);
