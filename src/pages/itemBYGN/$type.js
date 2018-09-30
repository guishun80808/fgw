import * as React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { connect } from 'dva';
import router from 'umi/router';
import CommonItem from '../../components/commonItem';

function ItemPage({ itemBYGN, dispatch, match }) {
  const { list, refreshing } = itemBYGN;

  function handleRefresh() {
    const { params: { type } } = match;
    dispatch({
      type: 'itemBYGN/fetch',
      payload: {
        type: type,
      },
    });
  }

  function handleClick(id) {
    router.push(`/detailsBYGN/${id}`);
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
  return { itemBYGN: _.itemBYGN };
})(ItemPage);
