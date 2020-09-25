import React from 'react';
import Head from 'next/head';
import Root from '../components/sections/Root';
import Footer from '../components/sections/Footer';
import Collections from '../components/sections/collections/Collections'


const Collection = () => {
    return ( 
        <Root>
            <Head>
                <title>Collection</title>
            </Head>
            <Collections />
            <Footer />
        </Root>
     );
}   
 
export default Collection;