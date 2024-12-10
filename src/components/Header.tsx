const Header = () => {
    const openResume = () => {
        window.open("/Resume.pdf", "_blank");
    };
    return (
        <div className="w-[80%] m-auto sm:pt-44 flex justify-center pt-20">
            <div>
                <div className="flex flex-col gap-3">
                    <h2
                        className="text-3xl sm:text-6xl font-bold text-center leading-snug animate-slideIn"
                        style={{
                            background:
                                "linear-gradient(267deg, #DA7C25 .36%, #B923E1 102.06%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            animation: "slideIn 1s ease-in-out",
                        }}
                    >
            <span
                style={{
                    display: "inline-block",
                    animation: "gradientAnimation 3s infinite",
                    backgroundSize: "200% 200%",
                }}
            >
              I'm Ronak Tanwar,
            </span>{" "}
                        Full Stack Developer based in India.
                    </h2>
                    <p
                        className="text-center max-w-2xl m-auto text-sm sm:text-base text-secondary"
                        style={{ animation: "slideIn 1.2s ease-in-out" }}
                    >
                        I am a full-stack developer from Jaipur, India with 1+ years of
                        experience in multiple companies like Microsoft, Tesla, and Apple.
                    </p>
                    <div className="flex justify-center gap-4 mt-6">
                        <button
                            className="px-6 py-3 rounded-full flex items-center text-base"
                            style={{
                                background:
                                    "linear-gradient(267deg, #DA7C25 .36%, #B923E1 102.06%)",
                                animation: "slideIn 1.4s ease-in-out",
                            }}
                        >
                            Hire Me
                        </button>
                        <button
                            className="sm:px-6 sm:py-3 px-3 py-1 flex items-center sm:text-base text-sm"
                            style={{
                                background: "transparent",
                                color: "#fff",
                                border: "2px solid transparent",
                                borderImage:
                                    "linear-gradient(267deg, #DA7C25 .36%, #B923E1 102.06%)",
                                borderImageSlice: 1,
                                borderRadius: "12px",
                                animation: "slideIn 1.6s ease-in-out",
                            }}
                            onClick={openResume}
                        >
                            My Resume
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
