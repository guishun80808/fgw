import pathToRegexp from 'path-to-regexp';
import { GET } from '../../../services/restful';

export default {
  namespace: 'details',
  state: {
    openS: false,
    mark: 'fwfw',
  },
  subscriptions: {
    setup: function({ dispatch, history }) {
      history.listen(function({ pathname }) {
        const match = pathToRegexp('/details/:id').exec(pathname);
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
    changeOpen: function*({ payload }, { select, call, put }) {
      yield put({
        type: 'update_state',
        payload: {
          openS: !payload.openS,
        },
      });
    },
    fetch_byId: function*({ payload: { id } }, { select, call, put }) {
      const { data } = yield call(GET, `/api/details/${id}`);
      yield put({
        type: 'update_state',
        payload: data,
      });
    },
    showItem: function*({ payload }, { select, call, put }) {
      yield put({
        type: 'update_state',
        payload: {
          mark: payload,
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
