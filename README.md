# ydyl-portal-mobile

湖北省一带一路公共服务平台 - 手机端门户网站

## 启动开环境

- 安装依赖

  ```bash
  $ yarn install 或者 npm install
  ```

- 启动开发环境
  
  ```bash
  $ yarn start 或者 yarn start
  ```

## 编译项目

```bash
$ yarn build 或者 npm run build
```

编译后的文件存储在 `./dist` 文件夹中

## 部署项目

- 方式一：直接使用 `nginx` 部署 `./dist` 文件夹
- 方式二：使用 `node.js` 环境，安装 `serve` 运行 `./dist` 文件夹
  
  ```bash
  $ yarn global add serve 或者 npm install -g serve
  $ cd dist
  $ serve
  ```
