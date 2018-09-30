import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: "layouts__index" */'../../layouts/index.js') }),
    "routes": [
      {
        "path": "/",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: "p__index" */'../index.js') }),
        "_title": "湖北省一带一路公共服务平台",
        "_title_default": "湖北省一带一路公共服务平台"
      },
      {
        "path": "/details/:id",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: "p__details__$id" */'../details/$id.js') }),
        "_title": "湖北省一带一路公共服务平台",
        "_title_default": "湖北省一带一路公共服务平台"
      },
      {
        "path": "/detailsBYInfor",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: "p__detailsBYInfor__index" */'../detailsBYInfor/index.js') }),
        "_title": "湖北省一带一路公共服务平台",
        "_title_default": "湖北省一带一路公共服务平台"
      },
      {
        "path": "/detailsBYInfor/:id",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: "p__detailsBYInfor__$id" */'../detailsBYInfor/$id.js') }),
        "_title": "湖北省一带一路公共服务平台",
        "_title_default": "湖北省一带一路公共服务平台"
      },
      {
        "path": "/detailsBYWeek",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: "p__detailsBYWeek__index" */'../detailsBYWeek/index.js') }),
        "_title": "湖北省一带一路公共服务平台",
        "_title_default": "湖北省一带一路公共服务平台"
      },
      {
        "path": "/detailsBYWeek/:id",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: "p__detailsBYWeek__$id" */'../detailsBYWeek/$id.js') }),
        "_title": "湖北省一带一路公共服务平台",
        "_title_default": "湖北省一带一路公共服务平台"
      },
      {
        "path": "/detailsBYZCTJ",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: "p__detailsBYZCTJ__index" */'../detailsBYZCTJ/index.js') }),
        "_title": "湖北省一带一路公共服务平台",
        "_title_default": "湖北省一带一路公共服务平台"
      },
      {
        "path": "/detailsBYZCTJ/:id",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: "p__detailsBYZCTJ__$id" */'../detailsBYZCTJ/$id.js') }),
        "_title": "湖北省一带一路公共服务平台",
        "_title_default": "湖北省一带一路公共服务平台"
      },
      {
        "path": "/detailsBYGN",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: "p__detailsBYGN__index" */'../detailsBYGN/index.js') }),
        "_title": "湖北省一带一路公共服务平台",
        "_title_default": "湖北省一带一路公共服务平台"
      },
      {
        "path": "/detailsBYGN/:id",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: "p__detailsBYGN__$id" */'../detailsBYGN/$id.js') }),
        "_title": "湖北省一带一路公共服务平台",
        "_title_default": "湖北省一带一路公共服务平台"
      },
      {
        "path": "/itemBYGN",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: "p__itemBYGN__index" */'../itemBYGN/index.js') }),
        "_title": "湖北省一带一路公共服务平台",
        "_title_default": "湖北省一带一路公共服务平台"
      },
      {
        "path": "/itemBYGN/:type",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: "p__itemBYGN__$type" */'../itemBYGN/$type.js') }),
        "_title": "湖北省一带一路公共服务平台",
        "_title_default": "湖北省一带一路公共服务平台"
      },
      {
        "path": "/itemBYInfor",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: "p__itemBYInfor__index" */'../itemBYInfor/index.js') }),
        "_title": "湖北省一带一路公共服务平台",
        "_title_default": "湖北省一带一路公共服务平台"
      },
      {
        "path": "/details",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: "p__details__index" */'../details/index.js') }),
        "_title": "湖北省一带一路公共服务平台",
        "_title_default": "湖北省一带一路公共服务平台"
      },
      {
        "path": "/itemBYInfor/:type",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: "p__itemBYInfor__$type" */'../itemBYInfor/$type.js') }),
        "_title": "湖北省一带一路公共服务平台",
        "_title_default": "湖北省一带一路公共服务平台"
      },
      {
        "path": "/itemBYWeek",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: "p__itemBYWeek__index" */'../itemBYWeek/index.js') }),
        "_title": "湖北省一带一路公共服务平台",
        "_title_default": "湖北省一带一路公共服务平台"
      },
      {
        "path": "/itemBYZCTJ",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: "p__itemBYZCTJ__index" */'../itemBYZCTJ/index.js') }),
        "_title": "湖北省一带一路公共服务平台",
        "_title_default": "湖北省一带一路公共服务平台"
      },
      {
        "path": "/detailsBYBanner",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: "p__detailsBYBanner__index" */'../detailsBYBanner/index.js') }),
        "_title": "湖北省一带一路公共服务平台",
        "_title_default": "湖北省一带一路公共服务平台"
      },
      {
        "path": "/detailsBYBanner/:id",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: "p__detailsBYBanner__$id" */'../detailsBYBanner/$id.js') }),
        "_title": "湖北省一带一路公共服务平台",
        "_title_default": "湖北省一带一路公共服务平台"
      },
      {
        "path": "/service",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: "p__service__index" */'../service/index.js') }),
        "_title": "湖北省一带一路公共服务平台",
        "_title_default": "湖北省一带一路公共服务平台"
      },
      {
        "path": "/service/:id",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: "p__service__$id" */'../service/$id.js') }),
        "_title": "湖北省一带一路公共服务平台",
        "_title_default": "湖北省一带一路公共服务平台"
      },
      {
        "path": "/home",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: "p__home__index" */'../home/index.js') }),
        "_title": "湖北省一带一路公共服务平台",
        "_title_default": "湖北省一带一路公共服务平台"
      },
      {
        "component": () => React.createElement(require('G:/workplace-vs-code/ydyl/packages/portal-mobile/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false }),
        "_title": "湖北省一带一路公共服务平台",
        "_title_default": "湖北省一带一路公共服务平台"
      }
    ],
    "_title": "湖北省一带一路公共服务平台",
    "_title_default": "湖北省一带一路公共服务平台"
  },
  {
    "component": () => React.createElement(require('G:/workplace-vs-code/ydyl/packages/portal-mobile/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false }),
    "_title": "湖北省一带一路公共服务平台",
    "_title_default": "湖北省一带一路公共服务平台"
  }
];

export default function() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
