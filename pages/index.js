import React from 'react';
import Head from 'next/head';
import ProductBanner from '../components/sections/ProductBanner'
import HeroSection from '../components/sections/HeroSection'
import CategoryBanner from '../components/sections/CategoryBanner'
import Root from '../components/sections/Root'
import Slider from '../components/sections/Slider'
import ExploreBanner from '../components/sections/ExploreBanner'
import Footer from '../components/sections/Footer'

const Home = () => (
  <Root transparentHeader={true}>
    <Head>
      <title>Home | commerce</title>
    </Head>

      <Slider />
      {/* <HeroSection /> */}
      <CategoryBanner />
      <ProductBanner />
      <ExploreBanner />
      <Footer />
  </Root>
)

export default Home;