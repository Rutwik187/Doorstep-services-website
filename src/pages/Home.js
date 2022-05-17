import { Feature } from '../container/features/Feature';
import { Header } from '../container/header/Header';
import { Services } from '../container/services/Services';
import { Steps } from '../container/steps/Steps';
import { Testimonials } from '../container/testimonials/Testimonials';
import { CTA } from '../components/cta/CTA';

export const Home = () => {
  return (
    <>
      <Header />
      <Feature />
      <Services />
      <Steps />
      <Testimonials />
      <CTA />
    </>
  )
}
