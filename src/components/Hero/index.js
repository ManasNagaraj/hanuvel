import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Backdrop from '../../assets/newBackdrop.mp4';
import BackdropImage from '../../assets/backdrop.jpg';
import { motion } from 'framer-motion';
import './style.scss';

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};
const letterAni = {
  initial: { y: 400, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.6,
    },
  },
};

function Hero() {
  return (
    <HeroContainer>
      <video
        autoplay='true'
        loop='true'
        muted='true'
        poster={BackdropImage}
        style={{
          position: 'absolute',
          width: '100%',
          zIndex: '-1',
          left: '50%',
          top: '50%',
          height: '100%',
          objectFit: 'cover',
          transform: 'translate(-50%,-50%)',
        }}
      >
        <source src={Backdrop} type='video/mp4' />
      </video>

      {/* <Gradient /> */}

      <HeroTitle>
        <motion.div className='banner' variants={banner}>
          <BannerRowTop title={'Hanuvel'} />
          <div
            style={{
              width: '100%',
              height: '10px',
              backgroundColor: '#ffc93c',
              marginTop: '50px',
            }}
          ></div>
          <BannerRowBottom
            style={{ height: '10vh !important' }}
            title={'Consultant'}
          />
        </motion.div>
      </HeroTitle>
    </HeroContainer>
  );
}

export default Hero;

const AnimatedLetters = ({ title, disabled }) => (
  <motion.span
    className='row-title'
    variants={disabled ? null : banner}
    initial='initial'
    animate='animate'
  >
    {[...title].map((letter) => (
      <motion.span
        className='row-letter'
        variants={disabled ? null : letterAni}
      >
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const AnimatedLettersR = ({ title, disabled }) => (
  <motion.span
    className='row-title'
    variants={disabled ? null : banner}
    initial='initial'
    animate='animate'
  >
    {[...title].map((letter) => (
      <motion.span
        className='row-letter-rew'
        variants={disabled ? null : letterAni}
      >
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const BannerRowTop = ({ title }) => {
  return (
    <div className={'banner-row'}>
      <div className='row-col'>
        <AnimatedLetters title={title} />
      </div>
    </div>
  );
};

const BannerRowBottom = ({ title }) => {
  return (
    <div className={'banner-row center'}>
      <AnimatedLettersR title={title} />
    </div>
  );
};

const HeroContainer = styled.div`
  width: 100%;
  height: 90vh;
  margin: 0;
  video {
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -o-filter: blur(5px);
    -ms-filter: blur(5px);
    filter: blur(5px);
  }
`;
const Gradient = styled.div`
  width: 100%;
  height: 90vh;

  background: rgb(0, 21, 64);
  background: linear-gradient(
    0deg,
    rgba(0, 21, 64, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
`;
const HeroTitle = styled.div`
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  text-align: center;

  transform: translate(-50%, -50%);
  h6 {
    font-family: 'Poppins-SemiBold';
    color: #fafafa;
    font-size: 8rem;
    line-height: 3.0625rem;

    @media only screen and (max-width: 414px) {
      font-size: 4rem;
    }
  }

  p {
    color: #ffb290;
    font-size: 4rem;
  }

  @media only screen and (max-width: 414px) {
    width: 100%;
  }
`;
