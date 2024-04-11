// import Lottie from "lottie-react";
import dynamic from 'next/dynamic';

import React from "react";

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
// or lottie-react - depending on what library you use

const AnimationLottie = ({ animationPath, width }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '95%',
    }
  };


  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;