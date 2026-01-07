import * as fs from 'node:fs'

fs.rmSync('arc-material', {
  recursive: true,
  force: true,
})
