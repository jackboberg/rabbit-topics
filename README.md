# @jackrabbit/topics

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]
[![standard-readme compliant][standard-readme-image]][standard-readme-url]

> amqplib wrapper for easier rabbitmq scripting of topics queue

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#license)

## Installation

```sh
npm install @jackrabbit/topics
```

## Usage

#### `topics(url, [options])`

The exported function takes the same parameters as [`amqplib.connect`][amqplib],
and returns a object with two exported functions, `publish` and `subscribe`.

#### `publish(exchange, topic, message, done)`

Sends data to the topic exchange and yeilds

```js
const { publish } = require('@jackrabbit/topics')(url)

publish('tasks', 'servo.provision', { message: true }, (err) => {
  if (err) throw err // unable to publish

  console.log('message delivered')
})
```

#### `subscribe(exchange, topic, worker)`

Consumes matching topic messages on the exchange

```js
const { subscribe } = require('@jackrabbit/topics')(url)

subscribe('tasks', 'servo.#', (message, done) => {
  // do work
  done(null, { result: true })
})
```

## Contribute

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

[MIT](LICENSE.md)

[amqplib]: http://www.squaremobius.net/amqp.node/channel_api.html#connect

[npm-image]: https://img.shields.io/npm/v/@jackrabbit/topics.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@jackrabbit/topics
[travis-image]: https://img.shields.io/travis/jackboberg/rabbit-topics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/jackboberg/rabbit-topics
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard
[standard-readme-image]: https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square
[standard-readme-url]: https://github.com/RichardLitt/standard-readme
