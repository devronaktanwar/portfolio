import { MdAlternateEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

const Contact = () => {
  return (
    <div className="w-[90%] lg:w-[80%] m-auto py-16" id="contact">
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="relative text-center">
          <h2 className="md:text-5xl font-bold z-10 relative text-2xl">
            Let's Connect!
          </h2>
          <img
            src="data:image/svg+xml,%3csvg%20width='227'%20height='72'%20viewBox='0%200%20227%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2061.1395C0%2055.1999%205.16729%2050.5816%2011.0696%2051.2459L187.039%2071.052C209.597%2073.591%20228.703%2054.5844%20226.282%2032.0133C223.76%208.50255%20199.379%20-6.00841%20177.511%202.98631L13.7433%2070.3471C7.19098%2073.0422%200%2068.2245%200%2061.1395Z'%20fill='url(%23paint0_linear_2160_23)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2160_23'%20x1='851.318'%20y1='47.553'%20x2='756.751'%20y2='339.402'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DF8908'/%3e%3cstop%20offset='1'%20stop-color='%23B415FF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
            alt="decoration"
            className="absolute w-12 md:w-16 -bottom-2 z-0 right-0"
          />
        </div>

        <div className="flex flex-col lg:flex-row flex-wrap gap-6 justify-between sm:mt-6 mt-2">
          <div className="max-w-full lg:max-w-[520px]">
            <h2
              className="font-bold text-2xl md:text-4xl pb-4"
              style={{
                background:
                  "linear-gradient(267deg, #DA7C25 .36%, #B923E1 102.06%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Let's talk
            </h2>
            <p className="text-sm text-gray-300 sm:text-base text-secondary">
              I'm currently available to take on new projects, so feel free to
              send me a message about anything that you want me to work on. You
              can contact me anytime.
            </p>
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-2">
                <MdAlternateEmail size={26} />
                <p className="text-sm">dev.ronatanwar@gmail.com</p>
              </div>
              <div className="flex items-center gap-2">
                <SlLocationPin size={26} />
                <p className="text-sm">Jaipur, Rajasthan</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[520px]">
            <div className="space-y-4 sm:text-base text-sm">
              <div className="flex flex-col gap-1">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="border-b bg-transparent outline-none"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border-b bg-transparent outline-none"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="message">Write your message here</label>
                <textarea
                  placeholder="Enter your message"
                  className="border-b bg-transparent outline-none"
                />
              </div>
              <div>
                <button
                  className="sm:px-6 sm:py-3 rounded-full flex items-center sm:text-base px-3 py-2 text-sm"
                  style={{
                    background:
                      "linear-gradient(267deg, #DA7C25 .36%, #B923E1 102.06%)",
                  }}
                >
                  Send message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
