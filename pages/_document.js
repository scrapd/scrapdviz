import Document, { Head, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID } from '../lib/gtag';
// We wrap our scripts below in Fragment to avoid unnecessary mark up
import { Fragment } from 'react';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { NODE_ENV } = publicRuntimeConfig;
const isProduction = NODE_ENV === 'production';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="title" content="ScrAPDviz" />
          <meta name="description" content="Visualize Austin traffic fatalities from another angle" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://viz.scrapd.org/" />
          <meta property="og:title" content="ScrAPDviz" />
          <meta property="og:description" content="Visualize Austin traffic fatalities from another angle" />
          <meta property="og:image" content="https://viz.scrapd.org/static/images/photos/hero_image.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://viz.scrapd.org/" />
          <meta property="twitter:title" content="ScrAPDviz" />
          <meta property="twitter:description" content="Visualize Austin traffic fatalities from another angle" />
          <meta property="twitter:image" content="https://viz.scrapd.org/static/images/photos/hero_image.png" />

          <style>
            {`
            * {
              margin: 0;
              padding: 0;
            }
            html, body {
              width: 100%;
              min-height: 100%;
              font-family: Verdana, Geneva, sans-serif;
            }
          `}
          </style>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {isProduction && (
            <Fragment>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `
                }}
              />
            </Fragment>
          )}
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
