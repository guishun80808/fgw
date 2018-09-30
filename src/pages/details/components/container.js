import * as React from 'react';
import styles from './container.css';

function ConPage(props = []) {
  console.log(props);
  const { mark, fwfw, jgjj, jdal, fwcp, lxwm } = props || {};
  let name = '服务范围';
  const html = { __html: jgjj };

  if (mark === 'fwfw') {
    name = '服务范围';
  } else if (mark === 'jgjj') {
    name = '机构简介';
  } else if (mark === 'jdal') {
    name = '经典案例';
  } else if (mark === 'fwcp') {
    name = '服务产品';
  } else if (mark === 'lxwm') {
    name = '联系我们';
  }

  if (mark === 'fwfw') {
    return (
      <React.Fragment>
        <img src={require('../../../assets/serviceBanner.png')} className={styles['banner']} />
        <div className={styles['title']}>
          <p>{name}</p>
        </div>
        {fwfw.map((val, index) => (
          <div className={styles['list']} key={index}>
            <p>
              <span>0{index + 1}</span>
            </p>
            <div>{val.title}</div>
          </div>
        ))}
      </React.Fragment>
    );
  } else if (mark === 'jgjj') {
    return (
      <React.Fragment>
        <img src={require('../../../assets/serviceBanner.png')} className={styles['banner']} />
        <div className={styles['title']}>
          <p>{name}</p>
        </div>
        <div className={styles['txt']} dangerouslySetInnerHTML={html} />
      </React.Fragment>
    );
  } else if (mark === 'jdal') {
    return (
      <React.Fragment>
        <img src={require('../../../assets/serviceBanner.png')} className={styles['banner']} />
        <div className={styles['title']}>
          <p>{name}</p>
        </div>
        {jdal.map((val, index) => (
          <div className={styles['list']} key={index}>
            <div>{val.title}</div>
            <div>{val.content}</div>
          </div>
        ))}
      </React.Fragment>
    );
  } else if (mark === 'fwcp') {
    return (
      <React.Fragment>
        <img src={require('../../../assets/serviceBanner.png')} className={styles['banner']} />
        <div className={styles['title']}>
          <p>{name}</p>
        </div>
        fwcp
      </React.Fragment>
    );
  } else if (mark === 'lxwm') {
    return (
      <React.Fragment>
        <img src={require('../../../assets/serviceBanner.png')} className={styles['banner']} />
        <div className={styles['title']}>
          <p>{name}</p>
        </div>
        <div className={styles['list']}>
          <div>{lxwm[0].jgdz}</div>
          <div>{lxwm[0].kfyx}</div>
          <div>{lxwm[0].lxdh}</div>
          <div>{lxwm[0].wxtp}</div>
          <div>{lxwm[0].yzbm}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default ConPage;
