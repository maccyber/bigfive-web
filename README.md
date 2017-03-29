[![Build Status](https://travis-ci.org/maccyber/bigfive-web.svg?branch=master)](https://travis-ci.org/maccyber/bigfive-web)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Code Climate](https://codeclimate.com/github/maccyber/bigfive-web/badges/gpa.svg)](https://codeclimate.com/github/maccyber/bigfive-web)

# bigfive-web

Website for five factor model of personality based on work from [IPIP-NEO-PI](https://github.com/kholia/IPIP-NEO-PI).

Tests and evaluation is gathered from [ipip.ori.org](http://ipip.ori.org).

See it live @ [bigfive.world](https://bigfive.world)

Written in [nodejs](https://nodejs.org) using [next.js](https://github.com/zeit/next.js) framework and following [micro](https://github.com/zeit/micro) services: 
  * [micro-bigfive-questions](https://github.com/maccyber/micro-bigfive-questions) - *Serves questions*
  * [micro-bigfive-evaluator](https://github.com/maccyber/micro-bigfive-evaluator) - *Evaulates answers*
  * [micro-bigfive-generator](https://github.com/maccyber/micro-bigfive-generator) - *Generates results with evaluator and results and saves them.*
  * [micro-bigfive-results](https://github.com/maccyber/micro-bigfive-results) - *Serves the description of the results*
  * [micro-bigfive-save](https://github.com/maccyber/micro-bigfive-save) - *Saves the results*
  * [bigfive-compare](https://github.com/zrrrzzt/bigfive-compare) - *Compare the results with other people or groups*

The whole system is a framework primarily for personality tests, but can easily be extended with other types of tests.

Right now it supports these tests:

* Johnson's (2014) 120-item IPIP NEO-PI-R
* Donnellan et al.'s (2006) highly abridged B5 factor markers ("Mini-IPIP")
* Costa and McCrae's (1992) NEO-PI-R Domains (50 and 100 questions)
* Lee and Ashton's (2004) HEXACO-PI (soon)

## Installation

Download and install [nodejs](https://nodejs.org) and [git](https://git-scm.com/downloads)

```sh
git clone https://github.com/maccyber/bigfive-web
cd bigfive-web
npm install
npm run dev
```
Open web-browser at http://localhost:3000

## Deploy using [Now](https://zeit.co/now)

```sh
$ now https://github.com/maccyber/bigfive-web --npm
```

## Deploy using [Docker](https://www.docker.com/)

Install [Docker](https://www.docker.com/)

```sh
docker run -d --name bigfive-web maccyber/maccyber/bigfive-web
```

## Development

```sh
git clone http://github.com/maccyber/bigfive-web
cd bigfive-web
npm i
npm run dev
```

## Screenshot

![BigFive screendump](http://bildr.no/image/bkozazVQ.jpeg "BigFive")

## License

[MIT](LICENSE)

## About

Created with <3 by [zrrzzt](https://github.com/zrrrzzt) and [maccyber](https://github.com/maccyber)

![Robohash image of zrrrzzt](https://robots.kebabstudios.party/zrrrzzt.png "Robohash image of zrrrzzt") 
![Robohash image of maccyber](https://robots.kebabstudios.party/maccyber.png "Robohash image of maccyber")

