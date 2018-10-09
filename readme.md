# Basic Node.js Request Forwarder

Allows you to consume one webhook and trigger multiple other environments. You can also add your own functionality and checks in here.

## When to use

Most systems allow you to define one automatic hook, sometimes you want to trigger multiple different tasks or multiple environments on that one action, to do so you can use this project.

## How to use

Make sure you've `node` and `npm` installed:

```
# Install dependency
npm install

# Run the server
node index.js
```

## Configuration

In the `index.js` you can find an array of `environments`, your `port` and `host` configuration.

```
const environments = [
  'https://environment-1/purge',
  'https://environment-2/purge',
  'https://environment-3/purge',
  'https://environment-4/purge'
]
const port = 3000
const host = '127.0.0.1'
```
