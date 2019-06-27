# stringinject

Inject an array, or an object of items in to a string replacing selected values.

## Install

``` bash
npm install stringinject
```

## Usages

### Arrays

```javascript
import stringInject from 'stringinject';
```

If you pass stringInject a first parameter of a string which includes placeholder values in the format of {0}, {1}, {2} etc. A second parameter which is an Array of 3 string items. It will replace the placeholders, with the Array items in the order specified.

```javascript
var string = stringInject("This is a {0} string for {1}", ["test", "stringInject"]);

// This is a test string for stringInject
```

### Objects

You can also pass in an object with keys that exist as placeholders within the string. It will then find the placeholder based on your key and replace it with the value of that key from your object.

```javascript
var str = stringInject("My username is {username} on {platform}", { username: "tjcafferkey", platform: "GitHub" });

// My username is tjcafferkey on Github
```

### Formatting

You can also specify some basic numeric formatting. A TypeError will be thrown if a value can't be parsed.

```javascript
var string = stringInject("Values can be parseInt: {0:d} or parseFloat: {1:f}", [1.9, 2.1]);

// Values can be parseInt: 1 or parseFloat: 2.1
```
