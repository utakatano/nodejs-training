const { exec } = require('child_process')
const controller = new AbortController()
const { siglnal } = controller

const child = exec('grep ssh', { siglnal }, (error) => {
  console.log(error)
})

controller.abort()