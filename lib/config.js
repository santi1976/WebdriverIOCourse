require('dotenv').config()

module.exports = {
    browser: 'chrome',
    baseUrl: 'http://zero.webappsecurity.com/index.html',
    logLevel: 'info',
    maxInstance: 5,
    username: process.env.YOUR_USERNAME,
    password: process.env.YOUR_PASSWORD,
    timeout: 10000,
    bail: 0
}

