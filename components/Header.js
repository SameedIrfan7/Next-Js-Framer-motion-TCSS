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
          {/* <Link href={'/'}>
            <Image src={"/logo.svg"} width={220} height={46} priority={true} />
          </Link> */}
          {/* <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto "> */}
            {/* {title} */}
            {/* <motion.h1
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2"
            > */}
              {/* Sameed
              <span className="text-accent"> Irfan </span>
            </motion.h1>
          </div>  */}
          {/* {socials} */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
