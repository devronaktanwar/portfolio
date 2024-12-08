import { FC } from "react";
import { FaGithub } from "react-icons/fa";
import { MdOutlineLiveTv } from "react-icons/md";
import crypto from '../assets/crypto.png'
import stackjobs from '../assets/stackjobs.png'
const projectData = [
  {
    title: "Portfolio Site",
    description: "A personal portfolio to showcase projects and skills.",
    img: stackjobs,
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Stack Jobs",
    description:
      "A brief description of the project goes here to provide context.",
    img: crypto,
    liveLink: "#",
    githubLink: "#",
  },
];

const LatestWork = () => {
  return (
    <div className="w-[80%] m-auto py-28">
      <div className="flex flex-col items-center gap-8">
        <div className="relative">
          <h2 className="text-5xl font-bold z-10 relative">My Latest Work!</h2>
          <img
            src="data:image/svg+xml,%3csvg%20width='227'%20height='72'%20viewBox='0%200%20227%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2061.1395C0%2055.1999%205.16729%2050.5816%2011.0696%2051.2459L187.039%2071.052C209.597%2073.591%20228.703%2054.5844%20226.282%2032.0133C223.76%208.50255%20199.379%20-6.00841%20177.511%202.98631L13.7433%2070.3471C7.19098%2073.0422%200%2068.2245%200%2061.1395Z'%20fill='url(%23paint0_linear_2160_23)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2160_23'%20x1='851.318'%20y1='47.553'%20x2='756.751'%20y2='339.402'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DF8908'/%3e%3cstop%20offset='1'%20stop-color='%23B415FF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
            alt="img"
            className="absolute w-16 -bottom-2 z-0 right-0"
          />
        </div>
        <div className="flex flex-wrap gap-6 justify-center mt-6">
          {projectData.map((project, index) => (
            <LatestWorkCard
              key={index}
              title={project.title}
              description={project.description}
              img={project.img}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
interface lLatestWorkCardProps {
  title: string;
  description: string;
  img: string;
  liveLink: string;
  githubLink: string;
}
const LatestWorkCard: FC<lLatestWorkCardProps> = ({
  title,
  description,
  img,
  liveLink,
  githubLink,
}) => {
  return (
    <div className="border rounded-lg overflow-hidden group relative max-w-[500px]">
      <div>
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="cursor-pointer absolute inset-0 bg-gradient-to-r from-[#da7d25a3] to-[#b823e1a3] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex items-center justify-center">
        <div className="text-center text-white space-y-2 px-4">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-sm">{description}</p>
          <div className="flex justify-center items-center gap-4">
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <MdOutlineLiveTv size={28} />
            </a>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <FaGithub size={28} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestWork;