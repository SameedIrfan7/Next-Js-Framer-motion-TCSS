import Link from "next/link";
import {
  RiLinkedinLine,
  RiInstagramLine,
  RiFacebookLine,
  RiGithubLine,
} from "react-icons/ri";

const Socials = () => {
  return (
  <div className="flex items-center gap-x-5 text-lg">
    <Link href={''} className="hover:text-accent transition duration-150 ease-in-out">
      <RiLinkedinLine/>
    </Link>
    <Link href={''} className="hover:text-accent transition duration-150 ease-in-out">
      <RiInstagramLine/>
    </Link>
    <Link href={''} className="hover:text-accent transition duration-150 ease-in-out">
      <RiFacebookLine/>
    </Link>
    <Link href={''} className="hover:text-accent transition duration-150 ease-in-out">
      <RiGithubLine/>
    </Link>
    </div>
    );
};

export default Socials;
