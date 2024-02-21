import React, { useState } from "react";
import Avatar from "../../components/Avatar"; // Make sure Avatar component is properly imported
import Circles from "../../components/Circles"; // Make sure Circles component is properly imported
import ParticlesContainer from "../../components/ParticlesContainer";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiAdobexd,
  SiAdobephotoshop,
  SiNumpy,
  SiPandas,
  SiTensorflow,
  SiScikitlearn,
  SiNodedotjs,
  SiDjango,
  SiFlask,
  SiTailwindcss,
  SiPytorch,
  SiKeras,
  SiOpencv,
  SiYolo,
} from "react-icons/si";

// Define aboutData
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Front Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <FaBootstrap/>,
          <SiTailwindcss/>
        ],
      },
      {
        title: "Backend Development",
        icons: [
          <SiNodedotjs/>,
          <SiDjango/>,
          <SiFlask/>,
          <SiNextdotjs />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
      {
        title: "Machine Learning",
        icons: [<SiNumpy/>, <SiPandas/>, <SiScikitlearn/>,],
      },
      {
        title: "Deep Learning",
        icons: [<SiTensorflow/>, <SiPytorch/>, <SiKeras/>,],
      },
      {
        title: "Computer Vision",
        icons: [<SiOpencv/>, <SiYolo/>,],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2024",
      },
      // {
      //   title: "Adobe Design Achievement Awards - Finalist",
      //   stage: "2009 - 2010",
      // },
    ],
  },
  {
    title: "experience",
    info: [
      // {
      //   title: "UX/UI Designer - XYZ Company",
      //   stage: "2012 - 2023",
      // },
      {
        title: "Web Developer - ",
        stage: "23-2024",
      },
      // {
      //   title: "Intern - DEF Corporation",
      //   stage: "2008 - 2010",
      // },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - ",
        stage: "2023",
      },
      // {
      //   title: "Computer Science Diploma - AV Technical Institute",
      //   stage: "2009",
      // },
      // {
      //   title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
      //   stage: "2006",
      // },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[540px]"
      >
        <Avatar />
      </motion.div>
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -right-[440px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* {text} */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Capturing <span className="text-accent">Stories </span>
            with code
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            I'm a Web Developer and Machine Learning Enthusiast
          </motion.p>
          {/* {counters} */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* {experince} */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={4} duration={7} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of Experience
                </div>
              </div>
              {/* {clients} */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={50} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied Clients
                </div>
              </div>
              {/* {projects} */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={190} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished Projects
                </div>
              </div>

              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={7} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning awards
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* {info} */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* Render title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* {icons} */}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className="text-2xl text-white">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* {particles} */}
      <ParticlesContainer/>
      
    </div>
  );
};

export default About;