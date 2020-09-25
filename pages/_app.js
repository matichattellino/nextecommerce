import App from 'next/app';
import React from 'react';
import { theme, ThemeProvider, CSSReset } from '@chakra-ui/core'
import '../style/scss/style.scss';
import { wrapper } from '../store';
import categories from '../components/sections/collections/categories.data'
import products from '../components/sections/collections/products.data'


const breakpoints = ["360px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const newTheme = {
  ...theme,
  breakpoints
};

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    // Allows store to be updated via the dispatch action
    ctx.store.dispatch({ type: 'STORE_CATEGORIES', payload: categories});
    ctx.store.dispatch({ type: 'STORE_PRODUCTS', payload: products});

    return {
      pageProps: {
        // Call page-level getInitialProps
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
      },
    };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={newTheme}>
        <CSSReset /> 
        <Component {...pageProps} />
     </ThemeProvider>
    )
  }
}


export default wrapper.withRedux(MyApp);
