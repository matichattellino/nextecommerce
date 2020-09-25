import React from 'react';

import Lottie from 'react-lottie';
import animationData from '../../../lottie/add-to-cart.json'

export default function Animation( props ) {
    const defaultOptions = {
      loop: false,
      autoplay: false,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };
  
    return (
      <div className="cart-animation">
        <Lottie
          options={defaultOptions}
          height={32}
          width={32}
          isStopped={!props.isStopped}
        />
      </div>
    );
  }
  