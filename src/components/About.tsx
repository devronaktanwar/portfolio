import me from "../assets/me.jpeg";
const About = () => {
  return (
    <div id="about" className="w-[80%] m-auto sm:pt-48 pt-24">
      <div className="flex flex-col items-center gap-8">
        <div className="relative">
          <h2 className="md:text-5xl font-bold z-10 relative text-2xl">
            About me!
          </h2>
          <img
            src="data:image/svg+xml,%3csvg%20width='227'%20height='72'%20viewBox='0%200%20227%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2061.1395C0%2055.1999%205.16729%2050.5816%2011.0696%2051.2459L187.039%2071.052C209.597%2073.591%20228.703%2054.5844%20226.282%2032.0133C223.76%208.50255%20199.379%20-6.00841%20177.511%202.98631L13.7433%2070.3471C7.19098%2073.0422%200%2068.2245%200%2061.1395Z'%20fill='url(%23paint0_linear_2160_23)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2160_23'%20x1='851.318'%20y1='47.553'%20x2='756.751'%20y2='339.402'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DF8908'/%3e%3cstop%20offset='1'%20stop-color='%23B415FF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
            alt="img"
            className="absolute sm:w-16 w-12 -bottom-2 z-0 right-0"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-y-4 md:flex-row">
          <div className="basis-1/4 flex justify-center relative">
            <img
              src={me}
              alt="me"
              className="sm:w-52 w-44 rounded-full border z-20 relative"
            />
            <img
              src="data:image/svg+xml,%3csvg%20width='227'%20height='72'%20viewBox='0%200%20227%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2061.1395C0%2055.1999%205.16729%2050.5816%2011.0696%2051.2459L187.039%2071.052C209.597%2073.591%20228.703%2054.5844%20226.282%2032.0133C223.76%208.50255%20199.379%20-6.00841%20177.511%202.98631L13.7433%2070.3471C7.19098%2073.0422%200%2068.2245%200%2061.1395Z'%20fill='url(%23paint0_linear_2160_23)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2160_23'%20x1='851.318'%20y1='47.553'%20x2='756.751'%20y2='339.402'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DF8908'/%3e%3cstop%20offset='1'%20stop-color='%23B415FF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
              alt="img"
              className="absolute w-72 -rotate-45  z-0 right-4 top-12"
            />
          </div>
          <div className="basis-3/5 flex flex-col gap-3">
            <p className="text-sm sm:text-base text-secondary">
              I am a dedicated fullstack developer with expertise in React,
              TypeScript, Node.js, and Express.js. I excel in building
              user-centric, visually engaging, and highly functional web
              applications, focusing on delivering seamless user experiences and
              efficient solutions. With a passion for innovation and
              problem-solving, I thrive in dynamic and collaborative
              environments, aiming to create meaningful contributions to the
              ever-evolving tech landscape.
            </p>
            <div>
              <button
                className="px-4 py-3 text-sm sm:text-base rounded-full flex items-center"
                style={{
                  background:
                    "linear-gradient(267deg, #DA7C25 .36%, #B923E1 102.06%)",
                }}
              >
                Connect With Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
