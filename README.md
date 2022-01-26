

## Summary

This is a small app in React which demonstrates how we can use React components and state. Its a basic app just to learn how to use react. Same app will be much faster and easier with vanilla JS though.

Author - https://github.com/amt8u/ 
Use the app to learn/educate others. Any commercial usage shall need license from the author.

## Available Scripts

In the project directory, you can run:

### `apt get install nodejs`

### `apt get install npm`

Install nodejs and your choice of package manager(npm/yarn). Subsequently change your below commands as per your choice.

### `npm install`

Install all dependencies. This can take some time.

### `npm start` / `yarn start`

Starts local server at localhost:3000

### `yarn test`

Runs tests but not yet added for this project.

### `yarn build`

builds for production. Basically minifies and creates chunks


## Modify below params to change the difficulty level

* Get random numbers between the start and end range. A larger range means more random and difficult values

```js
const INPUT_START = 1;
const INPUT_END = 20;
```
<br/>

* Generate a set of numbers with given size. For now, 2 numbers are working. Need to add support to enable more than 2 operations

```js
const INPUTS_COUNT = 3;
```
<br/>

* Generate as many random options as needed. 4 seems to be a good number

```js
const OPTIONS_COUNT = 4;
```
<br/>

* Drives what kind of operations are included. See below table
```js
const DIFFICULTY_LEVEL = 3;
```

```js
    export const OPERATORS = {
        "0" : "+",
        "1" : "-",
        "2" : "*",
        "3" : "/"
    };
```
* Sets the game timer in seconds
```js
  const TIMER_DURATION = 240;
```