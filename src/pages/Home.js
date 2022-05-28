import React from 'react';

import { Feature } from '../container/features/Feature';
import { Header } from '../container/header/Header';
import { PopularServices } from '../container/popular-services/PopularServices';
import { Steps } from '../container/steps/Steps';
import { Testimonials } from '../container/testimonials/Testimonials';
import { CTA } from '../components/cta/CTA';
// import { Test } from '../container/Test';

export const Home = () => {
  return (
    <>
      {/* <Test /> */}
      <Header />
      <Feature />
      <PopularServices />
      <Steps />
      <Testimonials />
      <CTA />

    </>
  )
}
