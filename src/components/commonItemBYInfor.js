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
          refreshing={refreshing}
          onRefresh={onRefresh}
          // style={{
          //   height: Height,
          //   overflow: 'auto',
          // }}
        >
          <ul className={styles['list']}>
            {list.map((val, index) => (
              <li key={index}>
                <a onClick={this._handleClick.bind(this, val.id)}>
                  <span className={styles['title']}>{val.xmmc}</span>
                  <p>
                    <span>所属行业：</span>
                    {val.sshy}
                  </p>
                  <p>
                    <span>所属地区：</span>
                    {val.xmdd}
                  </p>
                  <p>
                    <span>投资方式：</span>
                    {val.tzfs}
                  </p>
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
