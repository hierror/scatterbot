const Twitter = require('twitter');

class Scatterbot {
    constructor(config) {
        this.client = new Twitter(config);

        this.log(`Hi, I'm Scatterbot and I am ready to roll!\n`);
    }

    // Logs in to the console with the time
    log(str) {
        let currentDate = new Date();
        console.log(`[${currentDate.toLocaleTimeString()}] ${str}`);
    }

    // Retweets a status
    retweet(params, username, status) {
        this.client.post('statuses/retweet', params, (err, data, response) => {
            this.log(`Retweeting the account @${username}: `);
            this.log(`${status}`);
            
            if (err) {
                this.log(`Error: Retweet failed!\n`)
                this.log(err);
            } else {
                this.log(`Success: Retweet accomplished!\n\n`)
            }
        });
    }

    // Creates a stream connection with the API and tracks the specified terms
    track(params) {
        this.log(`Starting to track ["${params.track}"]\n`);

        const stream = this.client.stream('statuses/filter', params);

        stream.on('data', event => {
            this.retweet({ id: event.id_str }, event.user.screen_name, event.text);
        });

        stream.on('error', error => {
            this.log(`Track failed!`);
            this.log(error);
        });
    }
}

module.exports = Scatterbot;