# array-query

> Run MongoDB-like queries on objects

Currently, only regular expression and direct equality is supported.

## Getting Started

Install `idempotent` using npm.

```shell
npm install idempotent
```

Then use it like so:

```javascript
var find = require('array-query').find

// ...

find(someArray, {
  foo: /(some|regex)/,
  bar: 10
})
```

## License

`array-query` is [MIT-Licensed](https://github.com/shovon/array-query/blob/master/LICENSE)