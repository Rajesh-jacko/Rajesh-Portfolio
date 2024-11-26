import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import FireworkEffect from "./FireworkEffect";
import StarsEffect from "./StarsEffect";
import TunnelEffect from "./TunnelEffect";
import ColourEffect from "./ColourEffect";
import ConfettiEffect from "./Confetti";

const effects = [ColourEffect, StarsEffect, ConfettiEffect, FireworkEffect, TunnelEffect];

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);
  const [currentEffectIndex, setCurrentEffectIndex] = useState(0);

  // Initialize particles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Change body background color based on the effect
  useEffect(() => {
    const blackBackgroundIndices = [1, 3, 4]; // Indices for StarsEffect, FireworkEffect, and TunnelEffect
    if (blackBackgroundIndices.includes(currentEffectIndex)) {
      document.body.style.backgroundColor = "black";
    } else {
      document.body.style.backgroundColor = "rgb(15, 22, 36"; // Default background color
    }
  }, [currentEffectIndex]);

  const handleButtonClick = () => {
    // Change to the next effect, looping back to the first one if at the end
    setCurrentEffectIndex((prevIndex) => (prevIndex + 1) % effects.length);
  };

  if (!init) {
    return null; // Or return a loading spinner, or some placeholder content
  }

  return (
    <div>
      <Particles id="particles" options={effects[currentEffectIndex]} />
      <div className="blobs" onClick={handleButtonClick}>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default ParticlesComponent;
