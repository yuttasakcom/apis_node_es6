import fs from 'fs'
export const config = JSON.parse(fs.readFileSync(`${__dirname}/${process.env.NODE_ENV}/config.json`, 'utf8'))