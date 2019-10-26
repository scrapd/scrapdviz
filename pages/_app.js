import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import Router from 'next/router';
import ServiceWorker from '../components/service-worker';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import { initializeStore } from '../redux/store';
import * as gtag from '../lib/gtag';

const isProduction = process.env.NODE_ENV === 'production';
isProduction && Router.events.on('routeChangeComplete', url => gtag.pageview(url));

class CustomApp extends App {
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <>
        <Head>
          <title>ScrAPDviz</title>
        </Head>
        <ServiceWorker />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </>
    );
  }
}

export default withRedux(initializeStore)(CustomApp);
