import ParticlesContainer from "../../components/ParticlesContainer";

//components
import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

//framer motion
import {motion} from "framer-motion";
import {fadeIn} from "../../variants";

const Services = () => {
  return(
    <div>
      <div className="h-full bg-primary/30 py-36 flex items-center">
        <Circles/>
        <div className="container mx-auto ">
        </div>


      </div>
      <Bulb/>
      {/* {particles} */}
      <ParticlesContainer/>
    </div>
    );
  }

export default Services;
