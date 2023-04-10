import { copy, remove } from 'fs-extra'
import fg from 'fast-glob'
import { watch } from 'chokidar'
import { normalizePath } from 'vite'

const srcPath = 'src/**/!(*.ts|tsconfig.json)'

function toDist(file) {
  return normalizePath(file).replace(/^src\//, 'dist/')
}

fg.sync(srcPath).forEach((file) => {
  copy(file, toDist(file))
})

if (process.argv[2] === '-w') {
  console.log(`Watching source: ${srcPath}`)
  // copy non ts files, such as an html or css, to the dist directory whenever
  // they change.
  watch(srcPath)
    .on('change', (file) => copy(file, toDist(file)))
    .on('add', (file) => copy(file, toDist(file)))
    .on('unlink', (file) => remove(toDist(file)))
}
