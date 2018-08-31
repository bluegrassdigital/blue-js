const fs = require('fs')
const execSync = require('child_process').execSync
const prettyBytes = require('pretty-bytes')
const gzipSize = require('gzip-size')
const pkg = require('../package.json')

const exec = (command, extraEnv) =>
  execSync(command, {
    stdio: 'inherit',
    env: Object.assign({}, process.env, extraEnv)
  })

console.log('Building CommonJS modules ...')

exec('babel modules -d . --ignore __tests__', {
  BABEL_ENV: 'cjs'
})

console.log('\nBuilding ES modules ...')

exec('babel modules -d es --ignore __tests__', {
  BABEL_ENV: 'es'
})

console.log(`\nBuilding ${pkg.name}.js ...`)

exec(`rollup -c -f umd -o umd/${pkg.name}.js`, {
  BABEL_ENV: 'umd',
  NODE_ENV: 'development'
})

console.log(`\nBuilding ${pkg.name}.min.js ...`)

exec(`rollup -c -f umd -o umd/${pkg.name}.min.js`, {
  BABEL_ENV: 'umd',
  NODE_ENV: 'production'
})

const size = gzipSize.sync(
  fs.readFileSync(`umd/${pkg.name}.min.js`)
)

console.log('\ngzipped, the UMD build is %s', prettyBytes(size))