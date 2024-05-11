import About from "./sections/About/About";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </>
  );
};

export default Home;
