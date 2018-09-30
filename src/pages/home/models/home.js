import { GET } from '../../../services/restful';

export default {
  namespace: 'home',
  state: {
    banner:[],
    zqfw:[]
  },
  subscriptions: {
    setup: function ({ dispatch, history }) {
      history.listen(function ({ pathname }) {
        if (pathname === '/home') {
          dispatch({ type: 'fetch', payload: {} });
        }
      });
    }
  },
  effects: {
    fetch: function* ({ payload }, { select, call, put }) {
      const { data } = yield call(GET, '/api/home', payload);
      yield put({
        type: 'update_state',
        payload: data,
      });
    }
  },
  reducers: {
    update_state: function (state, action) {
      return Object.assign({}, state, action.payload);
    }
  },
};
