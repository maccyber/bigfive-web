import React from 'react'
import Head from 'next/head'

export default ({pageTitle, children}) => (
  <div>
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width,initial-scale=1' />
      <link href='https://fonts.googleapis.com/css?family=Oswald|Rubik:300' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet' />
      <title>{pageTitle}</title>
      <link rel='apple-touch-icon' sizes='152x152' href='static/apple-touch-icon.png' />
      <link rel='icon' type='image/png' href='static/favicon-32x32.png' sizes='32x32' />
      <link rel='icon' type='image/png' href='static/favicon-16x16.png' sizes='16x16' />
      <link rel='manifest' href='static/manifest.json' />
      <link rel='mask-icon' href='static/safari-pinned-tab.svg' color='#5bbad5' />
      <meta name='theme-color' content='#ffffff' />
      <style>
        {`
          @media (max-width:960px) {
            .container {
              width: 100% !important;
            }
            .header {
              display: none;
            }
            .choiseBox {
              display: block;
            }
          }
          .footer {
            position: absolute;
            padding-top: 20px;
            color: #828282;
            width: 85%;
            text-align: center;
          }
          body {
            font-family: 'Rubik', sans-serif;
            background: #eee;
            padding: 0;
          }
          a {
            text-decoration: none;
            color: #444550;
          }
          h1 {
            font-family: 'Oswald';
            color: #fff;
            text-transform: uppercase;
            letter-spacing: 5px;
          }
          h2 {
            font-family: 'Oswald';
            color: #fff;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-size: 30px;
            color: #868686;
          }
          .container {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            width: 85%;
            margin: auto;
          }
          .header {
            background: #9a9a9a;
            padding-left: 2%;
            padding-top: 7px;
            padding-bottom: 7px;
            border-bottom: 1px solid #6f6f6f;
          }
          .header a {
            padding: 0px 10px;
            word-wrap: normal;
            display: inline-block;
          }
          .page {
            color: #828282;
            background: #fff;
          }
          .page-text {
            padding: 2%;
          }
          .infoText {
            padding-bottom: 8px;
          }
          .navButton {
            background-color: #94d696;
            border-radius: 5px;
            border: transparent;
            color: white;
            margin-right: 10px;
          }
          .question {
            font-size: 28px;
            margin-bottom: 10px;
          }
          .navButtonBack {
            background-color: #d68e8e;
          }
          .navButton:disabled {
            background-color: #d2d2d2;
          }
          .question {
            font-size: 28px;
          }
          .choiseText {
            line-height: 24px;
            padding: 4px;
            vertical-align: top;
          }
        `}
      </style>
    </Head>
    <div className='container'>
      <header className='header'>
        <h1 />
      </header>
      <div className='page'>
        <div className='page-text'>
          {children}
        </div>
      </div>
      <div className='footer'>
        <a href='https://github.com/maccyber/bigfive-web'>Bigfive-web</a><br />
        Made with ❤ by <a href='https://github.com/zrrrzzt/'>zrrrzzt</a> and <a href='https://github.com/maccyber'>maccyber</a>
      </div>
    </div>
  </div>
)
