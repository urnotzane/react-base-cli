const HappyPack = require('happypack');

const happypack_thread_pool = HappyPack.ThreadPool({
  size: 4
});

const happypackConfig = {
  plugins: [
    new HappyPack({
      id: 'babel',
      threadPool: happypack_thread_pool,
      loaders: ['babel-loader'],

    }),
    new HappyPack({
      id: 'ts',
      threadPool: happypack_thread_pool,
      loaders: [{
        path: 'ts-loader',
        query: {
          happyPackMode: true
        }
      }],
    }),
    new HappyPack({
      id: 'css',
      threadPool: happypack_thread_pool,
      loaders: ['css-loader'],
    }),
    new HappyPack({
      id: 'csv',
      threadPool: happypack_thread_pool,
      loaders: ['csv-loader'],
    }),
    new HappyPack({
      id: 'xml',
      threadPool: happypack_thread_pool,
      loaders: ['xml-loader'],
    }),
    new HappyPack({
      id: 'sass',
      threadPool: happypack_thread_pool,
      loaders: [{
        path: 'sass-loader',
        query: {
          sourceMap: true
        }
      }],
    })
  ],
}

module.exports = happypackConfig