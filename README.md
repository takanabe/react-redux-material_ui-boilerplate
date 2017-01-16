# react-redux-material_ui-boilerplate
A boilerplate for React + Redux + Material UI + ES6 syntax applications. This boilerplate includes the following tools and frameworks:

* [React](https://facebook.github.io/react/)
* [Redux](http://redux.js.org/)
* [Material UI](http://material-ui.com/#/)
* [webpack](https://webpack.github.io/)
* [Babel](https://babeljs.io/)
* [ESLint](http://eslint.org/)


# Usage
## Preparation
```bash
$ git clone https://github.com/takanabe/react-redux-material_ui-boilerplate.git
$ mv react-redux-material_ui-boilerplate [YOUR_APPNAME]
$ cd [YOUR_APPNAME]
$ rm -rf .git
$ git init
$ git add -A
$ git commit -m "Initial commit with boilerplate"
```

## Package installation
```bash
$ npm install
```

## Use development server
For development server, webpack-dev-server is reasonable. It monitors update files and rebuild them automatically. Since the webpack cli command is registerd in `package.json` in this project, just type the following command to run webpack-dev-server:

```bash
$ npm start
```

Be careful! The webpack-dev-server rebuilds files in `src` automatically but the bundled files are just placed on its memory. Build manually by allowing next section (Build assets), if you want need the bundled files.


## Build assets
To put compiled files into `static` directory, type the following command.

```bash
$ npm run build
```

