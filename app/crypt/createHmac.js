const { createHmac } = require('crypto')

const secret = 'abcdefg'

const hash = createHmac('sha256', secret)
                .update('I love cupcakes')
                .digest('hex')

console.log(hash)