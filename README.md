# @acallaris/promise-js
Handle promises like never before

# Installation
```sh
$ npm install @acallaris/promise-js
```

# Usage
You must first `import` it to your project
```js
import { handlePromise, handlePromiseArray } from '@acallaris/promise-js';

// Or
import * as promise from '@acallaris/promise-js';
```
Then, you can use it like this.
```js

// Handle a single promise
const [data, error] = await handlePromise(yourAsyncFunction());

// Handle an array of promises
const [data, error] = await handlePromiseArray([
  yourAsyncFunction(),
  anotherAsyncFunction(),
  yetAnotherAsyncFunction()
]);
```