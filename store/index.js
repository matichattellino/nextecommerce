import { createStore, applyMiddleware, compose } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import thunk from 'redux-thunk';
import { STORE_PRODUCTS, STORE_CATEGORIES } from './actions/action.types';

const initialState = {
    categories: [],
    products: [],
    cart: {},
};

//create recucer 
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE:
      // These are server side rendered from MyApp.getInitialProps, everything else should
      // come from client side state and should not be overwritten here by subsequent server
      // side hydration actions.
      const { categories, products } = action.payload;

      return {
        ...state,
        categories,
        products,
      };
      case STORE_CATEGORIES:
        return { ...state, categories: action.payload };
        // Dispatch in App SSR
        // Check if action dispatched is STORE_PRODUCTS and act on that
      case STORE_PRODUCTS:
        return { ...state, products: action.payload };
        // Dispatch in Product client-side
        // Check if action dispatched is STORE_CART and act on that
    }
}

// Enable Redux dev tools
const devtools = (process.browser && window.__REDUX_DEVTOOLS_EXTENSION__)
  ? window.__REDUX_DEVTOOLS_EXTENSION__(
    { trace: true, traceLimit: 25 }
  )
  : f => f;

// Create a makeStore function and pass in reducer to create the store
const makeStore = () => {
  return createStore(
    reducer,
    initialState,
    compose(applyMiddleware(thunk), devtools)
  );
};

export const wrapper = createWrapper(makeStore);