import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

export default function TypewriterIntro() {
  return (
  <>

      <span className='text-gradient ml-2 opacity-0 animate-fade-in-delay-2' >
        <Typewriter
          words={['Software Developer',
          'Full-Stack Engineer',
          'AI Agent Builder',
          'Backend Developer',
          'Frontend Developer',
          'LLM Integrator',
          'API Developer',
          'React Developer',
          'Express.js Expert',
          'Python Developer',
        ]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
   
      </>
  );
}
