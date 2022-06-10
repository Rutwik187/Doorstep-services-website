import React from 'react';

import { Feature } from '../container/features/Feature';
import { Header } from '../container/header/Header';
import { Services } from '../components/services/Services';
import { Steps } from '../container/steps/Steps';
import { Testimonials } from '../container/testimonials/Testimonials';
import { CTA } from '../components/cta/CTA';
import { popularServices } from '../data';
import { ServicesCategories } from './Services/ServicesCategories';
// import { Test } from '../container/Test';

export const Home = () => {
  return (
    <>
      {/* <Test /> */}
      {/* <ServicesCategories /> */}
      <Header />
      <Feature />
      <Services servicesProps={popularServices} title={'Most Popular Services'} tagLine={'Explore the greatest our services.'} />
      <Steps />
      <Testimonials />
      <CTA />

    </>
  )
}
