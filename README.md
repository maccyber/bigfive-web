[![Build Status](https://travis-ci.org/maccyber/bigfive-web.svg?branch=master)](https://travis-ci.org/maccyber/bigfive-web)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Code Climate](https://codeclimate.com/github/maccyber/bigfive-web/badges/gpa.svg)](https://codeclimate.com/github/maccyber/bigfive-web)

# bigfive-web

Website for five factor model of personality based on work from https://github.com/kholia/IPIP-NEO-PI

See it live @ https://bigfive.maccyber.io

Questions and evaluation is picked from [ipip.ori.org](http://ipip.ori.org)

Written in [nodejs](https://nodejs.org) using [next.js](https://github.com/zeit/next.js) framework and following [micro](https://github.com/zeit/micro) services: 
  * [micro-bigfive-questions](https://github.com/maccyber/micro-bigfive-questions)
  * [micro-bigfive-generator](https://github.com/maccyber/micro-bigfive-generator)
  * [micro-bigfive-evaluator](https://github.com/maccyber/micro-bigfive-evaluator)
  * [micro-bigfive-results](https://github.com/maccyber/micro-bigfive-results)
  * [micro-bigfive-save](https://github.com/maccyber/micro-bigfive-save)

## Installation

Download and install [nodejs](https://nodejs.org) and [git](https://git-scm.com/downloads)

```sh
git clone https://github.com/maccyber/bigfive-web
cd bigfive-web
npm install
npm run dev
```
Open web-browser at http://localhost:3000

## Example
See https://bigfive.maccyber.io (not finished)

## Deploy using [Now](https://zeit.co/now)

```sh
$ now https://github.com/maccyber/bigfive-web
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

## License

[MIT](LICENSE)

## About

Created by [zrrzzt](https://github.com/zrrrzzt) and [maccyber](https://github.com/maccyber)

![alt text](https://robots.kebabstudios.party/zrrrzzt.png "Robohash image of zrrrzzt") 
![alt text](https://robots.kebabstudios.party/maccyber.png "Robohash image of maccyber")

