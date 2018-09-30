import * as React from 'react';
import * as PropTypes from 'prop-types';
import { NavBar, PullToRefresh, Icon } from 'antd-mobile';
import styles from './commonItem.css';
import router from 'umi/router';

// const Height = document.documentElement.clientHeight - 45;
class Item extends React.Component {
  static propTypes = {
    list: PropTypes.array,
    refreshing: PropTypes.bool,
    onRefresh: PropTypes.func,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    list: [],
    refreshing: false,
    onRefresh: () => {},
  };

  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
    this.state = {};
  }

  render() {
    const { list, url, refreshing, onRefresh } = this.props;

    return (
      <React.Fragment>
        <PullToRefresh
          direction="up"
          refreshing={()=>{refreshing}}
          onRefresh={()=>{onRefresh}}
          // style={{
          //   height: Height,
          //   overflow: 'auto',
          // }}
        >
          <ul className={styles['list']}>
            {list.map((val, index) => (
              <li key={index}>
                <a onClick={this._handleClick.bind(this, val.id)}>
                  <span className={styles['title']}>{val.xqbt}</span>
                  <span className={styles['con']}>{val.xqjj}</span>
                  <div className={styles['right']}>
                    <span>来源：</span>
                    <span className={styles['sourse']}>{val.xqly}</span>
                    <span>发布日期：</span>
                    <span>{val.xqsj}</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </PullToRefresh>
      </React.Fragment>
    );
  }

  _handleClick(id) {
    const { onClick } = this.props;
    typeof onClick === 'function' && onClick(id);
  }
}

export default Item;
