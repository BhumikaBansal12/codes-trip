import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://github.com/tech2etc/React-Trippy-Tour-Website-Template/blob/main/src/assets/night.jpg?raw=true"
        title="About"
      />
    </>
  );
}

export default About;
