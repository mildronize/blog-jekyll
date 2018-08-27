import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" type='text/css' href="/_next/static/style.css" />
          <link rel='stylesheet' type='text/css' href='/static/css/nprogress.css' />
          <link rel='stylesheet' type='text/css' href='/static/css/Trirong.css' />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <body>
          <Main />
          {/* <NextScript /> */}
        </body>
      </html>
    )
  }
}
