# Rabbit-Topics

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]
[![standard-readme compliant][standard-readme-image]][standard-readme-url]

[npm-image]: https://img.shields.io/npm/v/@modulus/rabbit-topics.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@modulus/rabbit-topics
[travis-image]: https://img.shields.io/travis/onmodulus/rabbit-topics.svg?style=flat-square
[travis-url]: https://travis-ci.org/onmodulu/rabbit-topics
[standard-image]: https://img.shields.io/badge/code%20style-mod--standard-green.svg?style=flat-square
[standard-url]: http://npm.im/@modulus/standard
[standard-readme-image]: https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square
[standard-readme-url]: https://github.com/RichardLitt/standard-readme

> amqplib wrapper for easier rabbitmq scripting of topics queue

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#license)

## Installation

```sh
npm install @modulus/rabbit-topics
```

## Usage

#### `RabbitTopics(url, [options])`

The exported function takes the same parameters as [`amqplib.connect`][amqplib],
and returns a object with two exported functions, `publish` and `subscribe`.

#### `Publish(exchange, topic, message, done)`

Sends data to the topic exchange and yeilds

```js
const Topics = require('@modulus/rabbit-topics')(url)

Topics.publish('tasks', 'servo:provision', { message: true }, (err) => {
  if (err) throw err // unable to publish

  console.log('message delivered')
})
```

## Contribute

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

[MIT](LICENSE.md)
