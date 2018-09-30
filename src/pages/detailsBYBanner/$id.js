import * as React from 'react';
import { connect } from 'dva';
import { NavBar, Icon } from 'antd-mobile';
import router from 'umi/router';
import CommonDetails from '../../components/commonDetailsBYBanner';

function DetailsPage({ detailsBYBanner }) {
  const { item=[] } = detailsBYBanner;
  return (
    <React.Fragment>
      <CommonDetails item={item} />
    </React.Fragment>
  );
}

export default connect(function(_) {
  return { detailsBYBanner: _.detailsBYBanner };
})(DetailsPage);
