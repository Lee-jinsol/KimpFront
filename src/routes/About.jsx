import React from 'react';
import AboutBanner from '../components/About/AboutBanner';
import AboutText from '../components/About/AboutText';
import CustBanner from '../components/About/CustBanner';
import AboutCard from '../components/About/AboutCard';

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
