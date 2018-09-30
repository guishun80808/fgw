import * as React from 'react';
import { connect } from 'dva';
import { NavBar, Icon } from 'antd-mobile';
import router from 'umi/router';
import CommonDetails from '../../components/commonDetailsBYInfor';

function DetailsPage({ detailsBYInfor }) {
  const { item :{ data } } = detailsBYInfor;
  return (
    <React.Fragment>
      <CommonDetails item={data} />
    </React.Fragment>
  );
}

export default connect(function (_) {
  return { detailsBYInfor: _.detailsBYInfor }
})(DetailsPage);
