import React from 'react';
import AnimatedBtn from '../animatedButton/AnimatedBtn';

function HomePage() {
  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) return "Good morning"; // Before 12 PM (morning)
    if (hours >= 12 && hours < 17) return "Good afternoon"; // From 12 PM to 4:59 PM (afternoon)
    return "Good evening"; // After 5 PM (evening)
  };

  return (
    <div className="text-left p-4 max-w-6xl m-auto h-[calc(100vh-112px)] overflow-y-auto flex flex-col items-start justify-center">
      <section>
        <h1 className="greeting-text">
          {getGreeting()}! 
          <br />
          It's me, Rajesh Jacko.
        </h1>
        <p className="max-w-[800px] text-2xl leading-[40px] font-light text-white/50">
          Let’s build something amazing together!
        </p>
        <AnimatedBtn />
      </section>
    </div>
  );
}

export default HomePage;
