import React from 'react';
import AboutBanner from '../components/Home/AboutBanner';
import AboutText from '../components/Home/AboutText';
import CustBanner from '../components/Home/CustBanner';
import AboutCard from '../components/Home/AboutCard';

import styled from 'styled-components';

function About() {
  return (
    <>
      <AboutBanner />
      <AboutText />
      <CustBanner />
      <AboutCard />
    </>
  );
}

export default About;
