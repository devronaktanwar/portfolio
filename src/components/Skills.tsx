import CssIcon from "@/assets/icons/CssIcon";
import IconExpress from "@/assets/icons/ExpressIcon";
import HtmlIcon from "@/assets/icons/HtmlIcon";
import IconJavascript from "@/assets/icons/JsIcon";
import IconMongodb from "@/assets/icons/MongoIcon";
import NodeIcon from "@/assets/icons/NodeIcon";
import ReactIcon from "@/assets/icons/ReactIcon";
import { FC, ReactNode } from "react";

const Skills = () => {
  const skillsData = [
    {
      title: "HTML5",
      img: <HtmlIcon className="animate-bounce " />,
    },
    {
      title: "CSS3",
      img: <CssIcon className="animate-bounce " />,
    },
    {
      title: "JavaScript",
      img: <IconJavascript className="animate-bounce " />,
    },
    {
      title: "React Js",
      img: <ReactIcon className="animate-spin " />,
    },
    {
      title: "Node Js",
      img: <NodeIcon className="animate-rotate-y " />,
    },
    {
      title: "Express Js",
      img: <IconExpress className="animate-pulse" />,
    },
    {
      title: "Mongo DB",
      img: <IconMongodb className="animate-rotate-y " />,
    },
  ];
  return (
    <div className="w-[80%] m-auto pt-28">
      <div className="flex flex-col items-center gap-8">
        <div className="relative">
          <h2 className="text-5xl font-bold z-10 relative">My Skills!</h2>
          <img
            src="data:image/svg+xml,%3csvg%20width='227'%20height='72'%20viewBox='0%200%20227%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2061.1395C0%2055.1999%205.16729%2050.5816%2011.0696%2051.2459L187.039%2071.052C209.597%2073.591%20228.703%2054.5844%20226.282%2032.0133C223.76%208.50255%20199.379%20-6.00841%20177.511%202.98631L13.7433%2070.3471C7.19098%2073.0422%200%2068.2245%200%2061.1395Z'%20fill='url(%23paint0_linear_2160_23)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2160_23'%20x1='851.318'%20y1='47.553'%20x2='756.751'%20y2='339.402'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DF8908'/%3e%3cstop%20offset='1'%20stop-color='%23B415FF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
            alt="img"
            className="absolute w-16 -bottom-2 z-0 right-0 "
          />
        </div>
        <div className="flex flex-wrap gap-6 justify-center mt-6">
          {skillsData.map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.title}
              img={skill.img}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
interface lSkillCardProps {
  title: string;
  img: ReactNode;
  index: number;
}
const SkillCard: FC<lSkillCardProps> = ({ title, index, img }) => {
  return (
    <div className="w-[250px]">
      <div className="group border p-6 rounded-lg shadow-lg flex flex-col gap-4 cursor-pointer transition-transform hover:scale-105 hover:border-[2px] hover:border-[#B923E1] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#da7d2538] to-[#b823e129] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg -z-10" />

        <p className="text-4xl font-semibold text-left z-10">{`0${index}`}</p>
        <div className="flex justify-center flex-col items-center gap-4 z-10">
          {img}
          <h2 className="font-bold text-xl">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default Skills;
