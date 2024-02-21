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
    <Link href={'https://linkedin.com/in/SameedIrfan7'} className="hover:text-accent transition duration-150 ease-in-out">
      <RiLinkedinLine/>
    </Link>
    <Link href={'https://github.com/SameedIrfan7'} className="hover:text-accent transition duration-150 ease-in-out">
      <RiGithubLine/>
    </Link>
    <Link href={'https://instagram.com/_si_007'} className="hover:text-accent transition duration-150 ease-in-out">
      <RiInstagramLine/>
    </Link>
    <Link href={'https://www.facebook.com/profile.php?id=100081357972369'} className="hover:text-accent transition duration-150 ease-in-out">
      <RiFacebookLine/>
    </Link>
    </div>
    );
};

export default Socials;
