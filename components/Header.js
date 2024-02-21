import Image from "next/image";

import Link from "next/link";

import Socials from "../components/Socials";

//framer motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../variants";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* {logo} */}
          <div className=" width={220} height={46} priority={true} flex flex-col">
            {/* {title} */}
            <motion.h4
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h3 font-extrabold "
            >
              SAMEED
              <span className="text-accent"> IRFAN </span>
            </motion.h4>
          </div> 
          {/* {socials} */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
