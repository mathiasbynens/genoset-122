# genoset-122 [![Build status](https://travis-ci.org/mathiasbynens/genoset-122.svg?branch=master)](https://travis-ci.org/mathiasbynens/genoset-122) [![Code coverage status](https://coveralls.io/repos/mathiasbynens/genoset-122/badge.svg)](https://coveralls.io/r/mathiasbynens/genoset-122) [![Dependency status](https://gemnasium.com/mathiasbynens/genoset-122.svg)](https://gemnasium.com/mathiasbynens/genoset-122)

This script determines if a genome has an increased risk of baldness as per [gs122](http://www.snpedia.com/index.php/Gs122).

## Compatibility

This genoset is to be used with DNA-JSON. See [the _dna2json_ repository](https://github.com/genomejs/dna2json) for more information.

## Usage

```js
var isLikelyToGoBald = require('genoset-122');
var dna = require('./my-dna.json');

console.log(isLikelyToGoBald(dna));
// → `true` or `false`
```

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

_genoset-122_ is available under the [MIT](https://mths.be/mit) license.
