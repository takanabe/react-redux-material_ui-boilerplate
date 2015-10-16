module.exports = {
  context: __dirname + "/src",
  entry: {
    jsx: "./index.jsx",
    css: "./main.css",
    html: "./index.html",
  },

  output: {
    path: __dirname + "/static",
    filename: "bundle.js",
  },
  module: {
    preLoaders: [
        //Eslint loader
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "eslint-loader"},
    ],
    loaders: [
      { test: /\.html$/, loader: "file?name=[name].[ext]" },
      { test: /\.css$/, loader: "file?name=[name].[ext]" },
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loaders: ["react-hot","babel-loader?stage=0&optional=runtime"]},
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  eslint: {
    configFile: './.eslintrc'
  },
};
