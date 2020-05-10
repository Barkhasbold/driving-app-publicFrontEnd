import React from 'react';
import App from 'next/app';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Component {...pageProps} />
    );
  }
}

// Wraps all components in the tree with the data provider
export default MyApp;