import React from 'react';
import Header from './Header';

const Root = ({transparentHeader, children}) => {
    return ( 
        <>
            <Header transparent={transparentHeader} />
            {children}
        </>
     );
}
 
export default Root;