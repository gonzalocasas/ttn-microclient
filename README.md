# The Things Network microclient

This is a really tiny client for [The Things Network](https://thethingsnetwork.org) mainly built as an excuse to try out [now](https://zeit.co/now)'s mind-blowing service.

It is completely self-contained: you can host it locally or deploy it to a provider and it will just work on its own with zero-configuration.


## Prerequisites

* [Node.JS](https://nodejs.org/) (use a new-ish version, like 5.9 or higher, I tested with 6.2 only)
* An account and application in the [Dashboard](https://staging.thethingsnetwork.org/).

## Getting Started

- Clone this repository and open a terminal in that directory
- Install dependencies:

        $ npm install

- Run it:

        $ npm start

- Browse to [localhost:8080](http://localhost:8080/)


## Deploying

If you want to release this onto the big wide interwebs, you can use any node.js hosting provider out there, but I did this only to try out [now](https://zeit.co/now)'s insanely awesome one, so here's what I suggest.

- First make sure you have installed `now` globally:

        $ npm install -g now

- Login to `now`:

        $ now --login 

- Deploy:

        $ now

- Profit! :rocket:


## Credits

Based on [Hylke Visser](https://github.com/htdvisser)'s [socket.io example](https://github.com/TheThingsNetwork/examples/tree/master/socketio) and [The Things Network SDK for Node.js](https://github.com/TheThingsNetwork/sdk/blob/master/apps/node/ttn/).
