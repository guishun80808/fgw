import pathToRegexp from 'path-to-regexp';
import { GET } from '../../../services/restful';

export default {
  namespace: 'service',
  state: {
    item: [],
    ImgUrlPath: ''
  },
  subscriptions: {
    setup: function({ dispatch, history }) {
      history.listen(function({ pathname }) {
        const match = pathToRegexp('/service/:id').exec(pathname);
        if (match) {
          dispatch({
            type: 'fetch_byId',
            payload: {
              id: match[1],
            },
          });
        }
      });
    },
  },
  effects: {
    fetch: function*({ payload }, { select, call, put }) {},
    fetch_byId: function*({ payload: { id } }, { select, call, put }) {
      const { data } = yield call(GET, `/api/service/${id}`);
      const ImgUrlPath = yield call(GET, `/api/ImgUrlPath`);
      yield put({
        type: 'update_state',
        payload: {
          item: data,
          ImgUrlPath: ImgUrlPath
        },
      });
    },
  },
  reducers: {
    update_state: function(state, action) {
      return Object.assign({}, state, action.payload);
    },
  },
};
