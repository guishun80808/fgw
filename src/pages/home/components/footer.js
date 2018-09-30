import * as React from 'react';
import styles from './footer.css';

function FooterPage() {
  return (
    <React.Fragment>
        <div className={styles['footerBox']}>
            <p>主办：湖北省推进“一带一路”建设工作领导小组办公室</p>
            <p>承办：湖北省信息中心（湖北省电子政务中心、湖北省信用信息中心）</p>
            <p>鄂ICP备08007400号-16</p>
            <p>网安备案号：42010602002694</p>
        </div>
    </React.Fragment>
  );
}

export default FooterPage;
