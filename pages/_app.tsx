import App, { Container } from 'next/app';
import React from 'react';
import withApolloClient from '../lib/with-apollo-client';
import { ApolloProvider } from 'react-apollo';
import Head from 'next/head';
import { ApolloClient, NormalizedCacheObject } from 'apollo-boost';

export interface Props {
  apolloClient: ApolloClient<NormalizedCacheObject>;
}

class MyApp extends App<Props> {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
            key="viewport"
          />
        </Head>{' '}
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />{' '}
        </ApolloProvider>{' '}
      </Container>
    );
  }
}

export default withApolloClient(MyApp);