const devConfig = require('./dev')
const proConfig = require('./pro')

const isPro = process.env.NODE_ENV === 'production'

const config = isPro ? proConfig : devConfig

module.exports = config