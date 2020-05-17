# Scatterbot

Just a simple bot for scattering data all over Twitter. I'm kidding, he just retweets some things.

```js
const Scatterbot = require('Scatterbot');

const config = {
    consumer_key: 'd25fe54c17d9cb57ce698b3c37398aad',
    consumer_secret: 'bdd6131d8a8b67fc6e4a1ab13b2be26b',
    access_token_key: '400309427d9d78610b302014c948cdc7',
    access_token_secret: '4d81eee6685d46217e82378a3da581a8'
}

const bot = new Scatterbot(config);

const params = { track: '#scatter,#bot'}

bot.track(params);
```

## Installation

`npm install scatterbot`

## Getting Started

To use this bot, you will need valid Twitter developer credentials. Here's a [guide](https://developer.twitter.com/en/apply-for-access) on how to get them.

```js
const Scatterbot = require('Scatterbot');
```

### Configuring the credentials

To start tracking the words you want, you need to pass all the credentials to the bot constructor.

```js
const config = {
    consumer_key: 'add_consumer_key',
    consumer_secret: 'add_consumer_secret',
    access_token_key: 'add_access_token_key',
    access_token_secret: 'add_access_token_secret'
}
```
You could pass this credentials through environment variables too.

```js
const config = {
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.TACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
}
```

With the configurations added, just create your bot.

```js
const bot = new Scatterbot(config);
```

### Tracking!

After the initial configuration, now you are ready to track some specific terms.

```js
const params = { track: '#scatter,#bot'}

bot.track(params);
```

## Additional Information

This package abstracts some basic functionality of the [Twitter npm module](https://www.npmjs.com/package/twitter) to make it easy to track and retweets hashtags, facilitating the users of retweet bots and similars.

## License

[MIT License](LICENSE.md)