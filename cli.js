#!/usr/bin/env node

const lookup = require('.')
const query = process.argv.slice(2)

async function main() {
  if (!query.length) {
    console.log('Usage: wiktionary <term>')
    return
  }
  const result = await lookup(query)
  if (result) {
    console.log(result.text)
  } else {
    console.log('no results :[')
  }
}

main()