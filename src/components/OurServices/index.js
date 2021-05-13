import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';

function Ourservice() {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 1], [0, -0.5], {
    clamp: false,
  });
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <motion.div style={{ y, display: 'flex' }}>
        <div
          style={{ width: '20%', height: '20vh', backgroundColor: '#fff' }}
        ></div>
      </motion.div>
    </div>
  );
}

export default Ourservice;

const Image = styled.div`
  /* background-image: url('../../assets/backdrop.jpg'); */
  height: 200px;

  background-color: #fff;
  position: relative;
  z-index: 100;
`;
