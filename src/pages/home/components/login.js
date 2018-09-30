import * as React from 'react';
import styles from './login.css';

function LoginPage() {
  return (
    <React.Fragment>
        <div className={styles['logoBg']}>
          <p className={styles['logo']}></p>
          <div className={styles['txt']}>
            <i></i>
            <span>登录</span>
          </div>
        </div>
    </React.Fragment>
  );
}

export default LoginPage;
