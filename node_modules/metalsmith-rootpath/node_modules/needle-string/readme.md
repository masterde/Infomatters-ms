# needle-string

> Count case-sensitive occurrences of a string in a string (like needles in a haystack)

[![Build Status](https://travis-ci.org/radiovisual/needle-string.svg?branch=master)](https://travis-ci.org/radiovisual/needle-string)

## Install

```
$ npm install --save needle-string
```

## Usage

```js
const needles = require('needle-string');

needles('magical unicorns are magic', 'magic');
//=> 2
```

## API

### needleString(haystack, needle)

Returns the number of case-sensitive strings ('needles') in a string ('haystack') of text.

#### haystack

Type: `string`  

The string of text you want to search.

#### needle

Type: `string`

The string you want to count the occurrences of.

## License

MIT © [Michael Wuergler](http://numetriclabs.com)
