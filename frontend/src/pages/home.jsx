import React, { useMemo } from 'react';
import Hero from '../components/hero.jsx';
import FeaturedJobs from '../components/featuredJobs.jsx';
import CTASection from '../components/ctaSection.jsx';
import WhyChooseUs from '../components/whyChooseUs.jsx';
import Testimonials from '../components/testimonials.jsx';
import Categories from '../components/categories.jsx';

const Home = () => {

  return (
    <main>
      <Hero />
      <Categories />
      <FeaturedJobs />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </main>
  )
}

export default Home
