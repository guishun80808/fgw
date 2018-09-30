import * as React from 'react';
import { connect } from 'dva';
import { NavBar, Icon } from 'antd-mobile';
import router from 'umi/router';
import CommonDetails from '../../components/commonDetailsBYZCTJ';

function DetailsPage({ detailsBYZCTJ }) {
  const {
    item: { data },
    ImgUrlPath,
  } = detailsBYZCTJ;
  return (
    <React.Fragment>
      <CommonDetails item={data} ImgUrlPath={ImgUrlPath}/>
    </React.Fragment>
  );
}

export default connect(function(_) {
  return { detailsBYZCTJ: _.detailsBYZCTJ };
})(DetailsPage);
