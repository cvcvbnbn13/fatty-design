const path = require('path')
const glob = require('glob')
const fs = require('fs-extra')
const chalk = require('chalk')
const { spawn } = require('child_process')
const handlebars = require('handlebars')
const fetch = require('node-fetch')

const varCase = str =>
  str
    .replace(/-[a-z]/g, m => m[1].toUpperCase())
    .replace(/^.{1}/, m => m.toUpperCase())
const lowCase = str =>
  str.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`).replace(/^-/, '')

;(async () => {
  const component = process.argv[2]

  const dirName = lowCase(component)
  const componentName = varCase(component)

  spawn('mkdir', ['-p', path.join(process.cwd(), `src/${dirName}`)])

  const templateFiles = glob.sync(path.join(__dirname, 'template/*.hbs'))

  templateFiles.forEach(async filePath => {
    const content = await fs.readFile(filePath, 'utf8')
    const template = handlebars.compile(content)
    const result = template({
      dirName,
      componentName,
    })

    const newPath = filePath
      .replace('scripts/template', `src/${dirName}`)
      .replace('component', dirName)
      .replace('Component', componentName)
      .replace('.hbs', '')

    await fs.writeFile(newPath, result)

    console.log(chalk.green(`write ${newPath} success`))
  })
})()
