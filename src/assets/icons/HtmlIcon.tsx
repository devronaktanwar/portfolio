import * as React from "react";

function HtmlIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="none"
      height="80px"
      width="80px"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Define the linear gradient */}
      <defs>
        <linearGradient id="htmlGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DA7C25" />
          <stop offset="100%" stopColor="#B923E1" />
        </linearGradient>
      </defs>

      {/* Apply the gradient to the path */}
      <path
        fill="url(#htmlGradient)"
        d="M145.2 96l66 746.6L512 928l299.6-85.4L878.9 96H145.2zm595 177.1l-4.8 47.2-1.7 19.5H382.3l8.2 94.2h335.1l-3.3 24.3-21.2 242.2-1.7 16.2-187 51.6v.3h-1.2l-.3.1v-.1h-.1l-188.6-52L310.8 572h91.1l6.5 73.2 102.4 27.7h.4l102-27.6 11.4-118.6H510.9v-.1H306l-22.8-253.5-1.7-24.3h460.3l-1.6 24.3z"
      />
    </svg>
  );
}

export default HtmlIcon;
