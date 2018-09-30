import * as React from 'react';
import styles from './serviceEnter.css';
import router from 'umi/router';

function ServicePage(props) {
  const { zqfw } = props;
  return (
    <React.Fragment>
      <span className={styles['title']}>政企服务</span>
      {zqfw.map((val, index) => (
        <div className={styles['grid']} key={index}>
          <div
            className={styles['textBox']}
            onClick={(el, index) => {
              router.push(`/service/` + [val.id]);
            }}
          >
            <div className={styles['text']}>{val.text}</div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
}

export default ServicePage;
