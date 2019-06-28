const devConfig = require('./webpack/dev')
const proConfig = require('./webpack/pro')

const isPro = process.env.NODE_ENV === 'production'

const config = isPro ? proConfig : devConfig

module.exports = config