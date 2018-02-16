# wiktionary 

Look up words on [wiktionary.org](https://www.wiktionary.org/) in English or any other language.

Use it programmatically with JavaScript to fetch JSON, or use the command line interface (CLI) to look up words from your terminal.

## Programmatic Usage

Install it:

```sh
npm install wiktionary
```

Use it in JavaScript:

```js
const wiktionary = require('wiktionary')

wiktionary('somatology').then(result => {
  console.log(result)
})
```

The result looks like this:

```js
{
  query: 'somatology',
  html: '<p> ...same as text but with markup preserved... </p>',
  text: 'English\nEtymology\nFrom soma (body) +‎ -ology.\nNoun\nsomatology (usually uncountable, plural somatologies)\nThe study of the physical nature of human beings.\nDerived terms\nanthroposomatology\n'
}
```

If no result is found, `null` is returned.

The default language is English `en`, but you can specify a different language
with an optional secondar argument to the function:

```js
wiktionary('muñeca', 'es')
```

For available language codes, see the [List of Wikipedias](https://en.wikipedia.org/wiki/List_of_Wikipedias).

## CLI Usage

```
npm i -g wiktionary && wiktionary pomology
```

or use [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b)

```sh
npx wiktionary pomology
```

## Tests

```sh
npm install
npm test
```

## Dependencies

- [cheerio](https://github.com/cheeriojs/cheerio): Tiny, fast, and elegant implementation of core jQuery designed specifically for the server
- [flat](https://github.com/hughsk/flat): Take a nested Javascript object and flatten it, or unflatten an object with delimited keys
- [got](): Simplified HTTP requests
- [lodash](): Lodash modular utilities.

## Dev Dependencies

- [jest](https://github.com/facebook/jest): Delightful JavaScript Testing.


## License

MIT
