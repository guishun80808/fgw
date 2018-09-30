import * as React from 'react';
import { connect } from 'dva';
import { NavBar, Icon } from 'antd-mobile';
import router from 'umi/router';
import CommonDetails from '../../components/commonDetails';

function DetailsPage({ detailsBYGN }) {
  const { item :{ data } } = detailsBYGN;
  return (
    <React.Fragment>
      <CommonDetails item={data} />
    </React.Fragment>
  );
}

export default connect(function (_) {
  return { detailsBYGN: _.detailsBYGN }
})(DetailsPage);
