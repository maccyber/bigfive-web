[![Build Status](https://travis-ci.org/maccyber/bigfive-web.svg?branch=master)](https://travis-ci.org/maccyber/bigfive-web)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Coverage Status](https://coveralls.io/repos/github/maccyber/bigfive-web/badge.svg)](https://coveralls.io/github/maccyber/bigfive-web)
[![Code Climate](https://codeclimate.com/github/maccyber/bigfive-web/badges/gpa.svg)](https://codeclimate.com/github/maccyber/bigfive-web)

# bigfive-web

Website for five factor model of personality based on work at https://github.com/kholia/IPIP-NEO-PI
Using next.js framework and [micro](https://github.com/zeit/micro)services 
  * [micro-bigfive-questions](https://github.com/maccyber/micro-bigfive-questions)
  * [micro-bigfive-evaluator](https://github.com/maccyber/micro-bigfive-evaluator)

## Example
See https://next-bigfive-web-qkzlytivqy.now.sh/ (not finished)

## Deploy using [Now](https://zeit.co/now)

```sh
$ now https://github.com/maccyber/bigfive-web
```

## Development

```sh
git clone http://github.com/maccyber/bigfive-web
cd bigfive-web
npm i
npm run dev
```
