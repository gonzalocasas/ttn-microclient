# The Things Network microclient

This is a really tiny client for [The Things Network](https://thethingsnetwork.org) mainly built as an excuse to try out [now](https://zeit.co/now)'s mind-blowing service.

It is completely self-contained: you can host it locally or deploy it to a provider and it will just work on its own with zero-configuration.


## Prerequisites

* [Node.JS](https://nodejs.org/)
* An account and application in the [Dashboard](https://staging.thethingsnetwork.org/).

## Getting Started

- Clone this repository
- Install dependencies

        $ npm install

- Run it:

        $ npm start

- Browse to [localhost:8080](http://localhost:8080/)


## Deploying

Use [now](https://zeit.co/now)'s insanely awesome node.js service. Make sure you have installed `now` globally (`$ npm install -g now`).

Login to now:

    $ now --login 

Deploy:

    $ now

Profit!


## Credits

Based on [Hylke Visser](https://github.com/htdvisser)'s [socket.io example](https://github.com/TheThingsNetwork/examples/tree/master/socketio) and [The Things Network SDK for Node.js](https://github.com/TheThingsNetwork/sdk/blob/master/apps/node/ttn/).
