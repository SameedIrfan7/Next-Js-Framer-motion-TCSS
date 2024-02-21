import Image from "next/image";

//next link
import Link from "next/link";

//icons
import { HiSpeakerWave } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <div
        className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat"
      >
        <Image
          src={"/rounded.png"}
          width={141}
          height={148}
          alt=""
          className="animate-spin-slow w-full h-full max-w-[140px] max-h-[145px]"
        />
        {/* <HiSpeakerWave className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" /> */}
      </div>
    </div>
  );
};

export default ProjectsBtn;
