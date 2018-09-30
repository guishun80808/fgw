import { GET } from '../../../services/restful';

export default {
  namespace: 'itemBYWeek',
  state: {
    refreshing: false,
    item: {},
    list: [],
    page: 0,
    size: 5,
    ImgUrlPath: ''
  },
  subscriptions: {
    setup1: function ({ dispatch, history }) {
      history.listen(function ({ pathname }) {
        if(pathname==='/itemBYWeek'){
          dispatch({
            type: 'init',
            payload: {},
          });
        }
      });
    },
  },
  effects: {
    init: function* ({ payload }, { select, call, put }) {
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
        payload: {},
      });
    },
    fetch: function* ({ payload }, { select, call, put }) {
      yield put({
        type: 'update_state',
        payload: {
          refreshing: true,
        },
      });
      const { list: oList, page: oPage, size: oSize } = yield select(state => state['itemBYWeek']);
      const { data: { list, params = {} } } = yield call(GET, `/api/itemBYWeek`, {
        page: Number(oPage) + 1,
        size: oSize,
      });
      const ImgUrlPath = yield call(GET, `/api/ImgUrlPath`);
      yield put({
        type: 'update_state',
        payload: {
          refreshing: false,
          list: [...oList, ...list],
          page: params['page'] || 0,
          size: params['size'] || 5,
          ImgUrlPath: ImgUrlPath
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

