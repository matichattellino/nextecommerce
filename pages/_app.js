import App from 'next/app';
import React, { useState, useEffect } from 'react'
//import 'isomorphic-fetch'
import { theme, ThemeProvider, CSSReset } from '@chakra-ui/core'
import '../style/scss/style.scss';
import { wrapper } from '../store';

const breakpoints = ["360px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const newTheme = {
  ...theme,
  breakpoints
};

const MyApp = (props) => {
  const { Component, pageProps } = props;

  return (
    <ThemeProvider theme={newTheme}>
        <CSSReset /> 
        <Component {...pageProps} />
     </ThemeProvider>
  )
}

MyApp.getInitialProps = async ({ req, Component, ctx  }) => {
  //fetch data 
  const resProducts = await fetch(`${process.env.URL}/products`);
  const products = await resProducts.json();
  const resCategories = await fetch(`${process.env.URL}/categories`);
  const categories = await resCategories.json();

  ctx.store.dispatch({ type: 'STORE_CATEGORIES', payload: categories});
  ctx.store.dispatch({ type: 'STORE_PRODUCTS', payload: products});

  return {
    pageProps: {
      // Call page-level getInitialProps
      ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
    },
  };
}

export default wrapper.withRedux(MyApp);
