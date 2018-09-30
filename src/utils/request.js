import fetch from 'dva/fetch';

export default function request(url, options = {}) {
  /** 设置请求头信息 */
  options.headers = options.headers || {};
  options.headers['Content-Type'] = 'application/json;charset=UTF-8';
  options.headers['Accept'] = 'application/json';
  /** 发起请求 */
  return fetch(url, options).then(function (response) {
    if (response.ok) {
      return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }).then(function (response) {
    // 验证请求结果解析为JSON对象
    return response.text().then(function (text) {
      return { data: text ? JSON.parse(text) : {}, headers: response.headers };
    });
  }).then(function (data) {
    // 请求成功的操作
    return data;
  });
};
