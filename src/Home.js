import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";

const Home = () => {

  const data = {
    name: "E-Store"
  }

  return <>
   <HeroSection mydata={data} />
   <Services />
   <Trusted />
   </>
};

export default Home;
