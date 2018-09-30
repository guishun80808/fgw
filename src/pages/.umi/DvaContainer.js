import { Component } from 'react';
import dva from 'dva';
import createLoading from 'dva-loading';

let app = dva({
  history: window.g_history,
  ...((require('G:/workplace-vs-code/ydyl/packages/portal-mobile/src/dva.js').config || (() => ({})))()),
});

window.g_app = app;
app.use(createLoading());
app.use(require('G:/workplace-vs-code/ydyl/packages/portal-mobile/node_modules/dva-immer/lib/index.js').default());
app.model({ namespace: 'details', ...(require('G:/workplace-vs-code/ydyl/packages/portal-mobile/src/pages/details/models/details.js').default) });
app.model({ namespace: 'commonDetails', ...(require('G:/workplace-vs-code/ydyl/packages/portal-mobile/src/pages/detailsBYInfor/models/commonDetails.js').default) });
app.model({ namespace: 'commonDetails', ...(require('G:/workplace-vs-code/ydyl/packages/portal-mobile/src/pages/detailsBYWeek/models/commonDetails.js').default) });
app.model({ namespace: 'commonDetails', ...(require('G:/workplace-vs-code/ydyl/packages/portal-mobile/src/pages/detailsBYZCTJ/models/commonDetails.js').default) });
app.model({ namespace: 'commonDetails', ...(require('G:/workplace-vs-code/ydyl/packages/portal-mobile/src/pages/detailsBYGN/models/commonDetails.js').default) });
app.model({ namespace: 'item', ...(require('G:/workplace-vs-code/ydyl/packages/portal-mobile/src/pages/itemBYGN/models/item.js').default) });
app.model({ namespace: 'item', ...(require('G:/workplace-vs-code/ydyl/packages/portal-mobile/src/pages/itemBYInfor/models/item.js').default) });
app.model({ namespace: 'item', ...(require('G:/workplace-vs-code/ydyl/packages/portal-mobile/src/pages/itemBYWeek/models/item.js').default) });
app.model({ namespace: 'item', ...(require('G:/workplace-vs-code/ydyl/packages/portal-mobile/src/pages/itemBYZCTJ/models/item.js').default) });
app.model({ namespace: 'commonDetails', ...(require('G:/workplace-vs-code/ydyl/packages/portal-mobile/src/pages/detailsBYBanner/models/commonDetails.js').default) });
app.model({ namespace: 'service', ...(require('G:/workplace-vs-code/ydyl/packages/portal-mobile/src/pages/service/models/service.js').default) });
app.model({ namespace: 'home', ...(require('G:/workplace-vs-code/ydyl/packages/portal-mobile/src/pages/home/models/home.js').default) });

class DvaContainer extends Component {
  render() {
    app.router(() => this.props.children);
    return app.start()();
  }
}

export default DvaContainer;
