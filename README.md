This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

### `此项目为开发模板`
    适合对react生态已经熟悉的开发者
    (react16.x+react-router4.x+redux+redux-thunk+redux-actions)

## `关于store的一些提示`
使用 redux-actions [https://segmentfault.com/a/1190000013026224](https://segmentfault.com/a/1190000013026224)
当我们的在开发大型应用的时候，对于大量的action，我们的reducer需要些大量的swich来对action.type进行判断。
redux-actions可以简化这一烦琐的过程，它可以是actionCreator，也可以用来生成reducer，其作用都是用来简化action、reducer。
主要函数有 [createAction、handleActions、combineActions。][https://redux-actions.js.org/introduction]

## `关于react-outer4.0对比之前版本的的一些tips`
[most important tips is route也是component的概念][https://github.com/YutHelloWorld/Blog/issues/4]
组件中有嵌套了子路由,在页面组件里面配置，for example (src/pages/Personal/index.js)


## `组件中使用了@装饰器decorators`

"babel-plugin-transform-decorators-legacy": "^1.3.4",
"babel-plugin-transform-runtime": "^6.23.0",

开发环境安装了这两个插件之后需要在

.babelrc文件中添加
"plugins": [
    ["transform-runtime", { "polyfill": true }],
    "transform-decorators-legacy"
],