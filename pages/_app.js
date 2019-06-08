import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import ServiceWorker from '../components/service-worker';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import { initializeStore } from '../redux/store';

class CustomApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    // We can dispatch from here too.
    // ctx.store.dispatch({ type: 'FOO', payload: 'foo' });

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Head>
          <title>ScrAPDviz</title>
        </Head>
        <ServiceWorker />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(initializeStore)(CustomApp);
