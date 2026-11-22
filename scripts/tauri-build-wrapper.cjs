const path = require('path')
const cli = require(path.join(__dirname, '..', 'node_modules', '@tauri-apps', 'cli', 'main.js'))
const args = process.argv.slice(2)
cli.run(args, 'tauri').then(() => {
  process.exit(0)
}).catch((err) => {
  console.error(err && err.message ? err.message : err)
  process.exit(1)
})
