import React, { createRef, useState, useEffect  } from 'react';
import Link from 'next/link'
import { Transition } from 'react-transition-group';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import CartItem from './CartItem'
import { connect } from 'react-redux';

const duration = 300;

const defaultStyle = {
transition: `transform ${duration}ms ease-in-out`
};

const transitionStyles = {
entering: { transform: 'translateX(100%)' },
entered: { transform: 'translateX(0)' },
exiting: { transform: 'translateX(100%)' },
exited: { transform: 'translateX(100%)' }
};

const backdropTransitionStyles = {
entering: { opacity: '0' },
entered: { opacity: '0.56' },
exiting: { opacity: '0' },
exited: { opacity: '0' }
};


const Cart = ({ isOpen, toggle, state  }) => {
    const cartScroll = createRef();

    useEffect(() => {
        clearAllBodyScrollLocks();
    })

    const onEntering = () => {
        disableBodyScroll(cartScroll.current);
    }
    
    const onExiting = () => {
        enableBodyScroll(cartScroll.current);
    }

    return ( 
        <Transition
            in={isOpen}
            timeout={duration}
            unmountOnExit
            onEntering={onEntering}
            onExiting={onExiting}
      >
          <div className="cart-modal font-weight-regular">
            <div
              className="backdrop"  
              style={{
                transition: `opacity ${duration}ms ease-in-out`,
                ...backdropTransitionStyles[state]
              }}
              onClick={() => toggle(false)}
            />

            {/* Cart Main Content */}
            <div
              className="main-cart-content d-flex flex-column"
              style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}
            >
              {/* Cart Header */}
              <div className="px-4 px-md-5">
                <div className="pt-4 pb-3 borderbottom border-color-black d-flex justify-content-between align-items-center">
                  <p className="font-family-secondary font-size-subheader">
                    Shopping Cart
                  </p>
                  <button
                    className="bg-transparent p-0"
                    onClick={() => toggle(false)}
                  >
                    <img src="/icon/cross.svg" />
                  </button>
                </div>
              </div>
                  <div
                    className="flex-grow-1 overflow-auto pt-4"
                    ref={cartScroll}
                  >
                      
                  </div>
                  {/* Cart Footer */}
                  <div className="cart-footer">
                    <div className="mb-3 d-flex">
                      <p className="font-color-light mr-2 font-weight-regular">
                        Subtotal:
                      </p>
                      <p>$100</p>
                    </div>
                    <div className="row">
                      <div className="col-6 d-none d-md-block">
                        <Link href="/collection">
                          <a className="h-56 d-flex align-items-center justify-content-center border border-color-black bg-white w-100 flex-grow-1 font-weight-medium font-color-black px-3">
                            Continue Shopping
                          </a>
                        </Link>
                      </div>
                      <div className="col-12 col-md-6">
                        <Link href="/checkout">
                          <a className="h-56 d-flex align-items-center justify-content-center bg-black w-100 flex-grow-1 font-weight-medium font-color-white px-3">
                            Checkout
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
            </div>
          </div>
      </Transition>
    );
}
 
export default connect(state => state)(Cart);
