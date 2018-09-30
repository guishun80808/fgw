import * as React from 'react';
import { connect } from 'dva';
import { NavBar, Icon } from 'antd-mobile';
import router from 'umi/router';
import CommonDetails from '../../components/commonDetailsBYweek';

function DetailsPage( { detailsBYWeek } ) {
  const { item } = detailsBYWeek;
  return (
    <React.Fragment>
      <CommonDetails item={item} />
    </React.Fragment>
  );
}

export default connect(function (_) {
  return { detailsBYWeek: _.detailsBYWeek }
})(DetailsPage);
