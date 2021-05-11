import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Backdrop from '../../assets/backdrop.mp4';
import { useSpring, animated } from 'react-spring';

function Hero() {
  const calc = (o) => `translateY(${o * 0.1}px)`;
  const calcp = (o) => `translateY(${o * 0.2}px)`;
  const ref = useRef();
  const [{ offset }, set] = useSpring(() => ({ offset: 0 }));

  const handleScroll = () => {
    const posY = ref.current.getBoundingClientRect().top;
    const offset = window.pageYOffset - posY;
    set({ offset });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return (
    <HeroContainer ref={ref}>
      <video
        autoplay='true'
        loop='true'
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
      <animated.div style={{ transform: offset.interpolate(calc) }}>
        <Gradient />
      </animated.div>

      <HeroTitle>
        <animated.h6 style={{ transform: offset.interpolate(calc) }}>
          Hanuvel
        </animated.h6>
        <animated.p style={{ transform: offset.interpolate(calc) }}>
          Consultants
        </animated.p>
      </HeroTitle>
    </HeroContainer>
  );
}

export default Hero;

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
    font-family: 'Merriweather';
    color: #fafafa;
    font-size: 6rem;
    line-height: 3.0625rem;

    @media only screen and (max-width: 414px) {
      font-size: 4rem;
    }
  }

  p {
    color: #ffb290;
    font-size: 1.75rem;
  }
`;
