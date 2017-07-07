# stringinject
Inject an array of items in to a string replacing selected values.

## Install ##

``` bash
npm install stringinject
```

## Usages ##

``` javascript
var stringInject = require('stringinject');
```

If you pass stringInject a first parameter of a string which includes placeholder values in the format of {0}, {1}, {2} etc. A second parameter which is an Array of 3 string items. It will replace the placeholders, with the Array items in the order specified.

```javascript
var string = stringInject("This is a {0} string for {1}", ["test", "stringInject"]);

// This is a test string for stringInject
```