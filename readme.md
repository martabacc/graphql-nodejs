# GraphQL NodeJs MongoDB

This project intended for learning GraphQL and spiking out what is actually in there. For disclaimer, read the acknowledgements part.
Things to enhance is:
 * Writing tests
 * Adding CI script
 * Provide deployment
 * Add UI

## Getting Started

### Prerequisites

Node, npm is a must. This entire repo is built on ES6 syntax.
Docker and docker-compose is optional, if you want to use docker rather than installing mongo locally.
```
$ node -v
$ npm -v

# you can use docker to run mongo on docker, to check its availability run
$ docker -v
$ docker-compose -v

# or just install locally, check it by running this
$ mongo --version
```

### Installing

First clone this repo, and run npm install
```
$ git clone https://github.com/ronayumik/graphql-nodejs
$ cd graphql-nodejs
$ npm install
```

Start the mongo server, or run the docker compose.
```
$ mongod

# or if you use docker-compose
$ docker-compose up
```

To start the server, simply run
```
$ npm run start
```

It will bring the server up on [http://localhost:8082/graphql](http://localhost:8082/graphql)

## Running the tests

TBC, still figuring out how to test it

## Deployment & CI/CD

Here are the proposed steps for CI/CD:
- Install
- Test
- Run Lint
- Deploy ( on master )

Planned to use Heroku and TravisCI as pipeline, triggered by commit (and PR), furthermore TBC.

## Built With

* Express
* Express-graphql
* Mongoose

## Coding style
This project used ESLint and extending rules from AirBnB one. You can see it on .eslintrc

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/ronayumik/graphql-nodejs/tags).
Currently still on develop.

## Acknowledgements

This project is inspired by [this tutorial](https://www.sitepoint.com/creating-graphql-server-nodejs-mongodb), and I decide to bring it further. The first commit is purely noted from their repository, afterwards is the enhancements that is described in Future Work point.


