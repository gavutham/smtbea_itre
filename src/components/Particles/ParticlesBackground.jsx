import Particles from "react-tsparticles";
import particleConfig from "./particlesConfig";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  async function loadParticles(main) {
    loadFull(main);
  }
  return (
    <Particles id="tsparticles" init={loadParticles} options={particleConfig} />
  );
};

export default ParticlesBackground;
