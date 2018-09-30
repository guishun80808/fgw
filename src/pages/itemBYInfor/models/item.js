import pathToRegexp from 'path-to-regexp';
import { GET } from '../../../services/restful';

export default {
  namespace: 'itemBYInfor',
  state: {
    refreshing: false,
    item: {},
    list: [],
    page: 0,
    size: 5,
  },
  subscriptions: {
    setup1: function ({ dispatch, history }) {
      history.listen(function ({ pathname }) {
        const match = pathToRegexp('/itemBYInfor/:type').exec(pathname);
        if (match) {
          dispatch({
            type: 'init',
            payload: {
              type: match[1],
            },
          });
        }
      });
    },
  },
  effects: {
    init: function* ({ payload: { type } }, { select, call, put }) {
      yield put({
        type: 'update_state',
        payload: {
          list: [],
          page: 0,
          size: 5,
        },
      });
      yield put({
        type: 'fetch',
        payload: {
          type,
        },
      });
    },
    fetch: function* ({ payload: { type } }, { select, call, put }) {
      if (!type) return;
      yield put({
        type: 'update_state',
        payload: {
          refreshing: true,
        },
      });
      const { list: oList, page: oPage, size: oSize } = yield select(state => state['itemBYInfor']);
      const { data: { list, params = {} } } = yield call(GET, `/api/itemBYInfor`, {
        mark: type,
        page: Number(oPage) + 1,
        size: oSize,
      });
      yield put({
        type: 'update_state',
        payload: {
          refreshing: false,
          list: [...oList, ...list],
          page: params['page'] || 0,
          size: params['size'] || 5,
        },
      });
    },
  },
  reducers: {
    update_state: function (state, action) {
      return Object.assign({}, state, action.payload);
    }
  },
};
