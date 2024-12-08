import * as React from "react";

function CssIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 384 512"
      fill="none"
      height="80px"
      width="80px"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Define the linear gradient */}
      <defs>
        <linearGradient id="cssGradient" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0.36%" stopColor="#DA7C25" />
          <stop offset="102.06%" stopColor="#B923E1" />
        </linearGradient>
      </defs>

      {/* Apply the gradient to the path */}
      <path
        fill="url(#cssGradient)"
        d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"
      />
    </svg>
  );
}

export default CssIcon;
