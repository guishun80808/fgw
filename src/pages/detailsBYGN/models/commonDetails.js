import pathToRegexp from 'path-to-regexp';
import { GET } from '../../../services/restful';

export default {
  namespace: 'detailsBYGN',
  state: {
    item: {}
  },
  subscriptions: {
    setup: function ({ dispatch, history }) {
      history.listen(function ({ pathname }) {
        const match = pathToRegexp('/detailsBYGN/:id').exec(pathname);
        if (match) {
          dispatch({
            type: 'fetch_byId',
            payload: {
              id: match[1],
            },
          });
        }
      });
    }
  },
  effects: {
    fetch: function* ({ payload }, { select, call, put }) { },
    fetch_byId: function* ({ payload: { id } }, { select, call, put }) {
      const data = yield call(GET, `/api/detailsBYGN/${id}`);
      yield put({
        type: 'update_state',
        payload: {
          item: data
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
