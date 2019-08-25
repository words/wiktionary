#!/usr/bin/env node

const lookup = require('.')
const query = process.argv.slice(2)
const locale = process.env.LOCALE

async function main() {
  if (!query.length) {
    console.log('Usage: (LOCALE=<locale>) wiktionary <term>')
    return
  }
  const result = await lookup(query, locale)
  if (result) {
    console.log(result.text)
  } else {
    console.log('no results :[')
  }
}

main()
