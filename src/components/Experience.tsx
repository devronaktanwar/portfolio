import React from "react";

interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
}

const experiences: Experience[] = [
  {
    title: "Software Engineer Intern",
    company: "Orufy Technologies",
    duration: "Aug 2024 - Present",
    description:
      "Developed and maintained web applications using the MERN stack, delivering scalable and user-friendly solutions.",
  },
  {
    title: "Software Intern",
    company: "Mobzway Technologies",
    duration: "May 2022 - Dec 2022",
    description:
      "Collaborated on UI/UX design and implemented responsive frontend components using React and Tailwind CSS.",
  }
];

const Experience: React.FC = () => {
  return (
    <div className="w-[90%] sm:w-[80%] m-auto sm:pt-28">
      <div className="flex flex-col items-center pb-14">
        <div className="relative">
          <h2 className="md:text-5xl font-bold z-10 relative text-2xl">
            My Experiences!
          </h2>
          <img
            src="data:image/svg+xml,%3csvg%20width='227'%20height='72'%20viewBox='0%200%20227%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2061.1395C0%2055.1999%205.16729%2050.5816%2011.0696%2051.2459L187.039%2071.052C209.597%2073.591%20228.703%2054.5844%20226.282%2032.0133C223.76%208.50255%20199.379%20-6.00841%20177.511%202.98631L13.7433%2070.3471C7.19098%2073.0422%200%2068.2245%200%2061.1395Z'%20fill='url(%23paint0_linear_2160_23)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2160_23'%20x1='851.318'%20y1='47.553'%20x2='756.751'%20y2='339.402'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DF8908'/%3e%3cstop%20offset='1'%20stop-color='%23B415FF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
            alt="img"
            className="absolute w-16 -bottom-2 z-0 right-0 "
          />
        </div>
      </div>
      <div className="relative border-l-2 border-gray-300">
        {experiences.map((experience, index) => (
          <div key={index} className="mb-8 ml-6">
            <div className="absolute -left-4 w-8 h-8 bg-gradient-to-r from-purple-600 to-orange-500 rounded-full border-2 border-white flex items-center justify-center">
              <span className="w-3 h-3 bg-white rounded-full"></span>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">{experience.title}</h3>
              <p className="text-sm text-gray-400">{experience.company}</p>
              <span className="block text-sm text-gray-500 mb-2">
                {experience.duration}
              </span>
              <p className="text-sm text-gray-300">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
