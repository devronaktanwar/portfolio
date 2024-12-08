import * as React from "react";

function IconMongodb(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      height="100px"
      width="100px"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Define the linear gradient */}
      <defs>
        <linearGradient id="mongodbGradient" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0.36%" stopColor="#DA7C25" />
          <stop offset="102.06%" stopColor="#B923E1" />
        </linearGradient>
      </defs>

      {/* Apply the gradient to the path */}
      <path
        fill="url(#mongodbGradient)"
        d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481a28.48 28.48 0 01.51-3.07c.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"
      />
    </svg>
  );
}

export default IconMongodb;