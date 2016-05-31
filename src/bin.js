#!/usr/bin/env node
'use strict'

const childProcess = require('child_process');

const child = childProcess.spawn(
    process.argv[2],
    process.argv.slice(2), {
        stdio: 'inherit'
    }
)

child.on('close', (code) => {
    const ourCode = code === 0 ? 1 : 0
    process.exit(ourCode)
})
