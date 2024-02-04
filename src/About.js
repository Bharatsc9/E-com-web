import { useProductContext } from "./context/AppProvider";
import HeroSection from "./components/HeroSection";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "About e-store",
  };
  return (
    <>
      {myName}
      <HeroSection mydata={data} />
    </>
  );
};

export default About;
