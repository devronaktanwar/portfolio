import * as React from "react";

function ReactIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      viewBox="0 0 15 15"
      height="100px"
      width="100px"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Define the gradient */}
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DA7C25" />
          <stop offset="100%" stopColor="#B923E1" />
        </linearGradient>
      </defs>

      {/* Apply the gradient to the strokes */}
      <path
        stroke="url(#gradient1)"
        d="M14.5 7.584c0 1.657-3.134 3-7 3s-7-1.343-7-3 3.134-3 7-3 7 1.343 7 3z"
      />
      <path
        stroke="url(#gradient1)"
        d="M4.166 13.739c1.457.79 4.13-1.327 5.972-4.726 1.841-3.4 2.153-6.795.696-7.584-1.457-.79-4.13 1.327-5.972 4.726-1.841 3.4-2.153 6.795-.696 7.584z"
      />
      <path
        stroke="url(#gradient1)"
        d="M10.834 13.739c-1.457.79-4.13-1.327-5.972-4.726-1.841-3.4-2.153-6.795-.696-7.584 1.457-.79 4.13 1.327 5.972 4.726 1.841 3.4 2.153 6.795.696 7.584z"
      />
      <path stroke="url(#gradient1)" d="M6.5 7.584a1 1 0 102 0 1 1 0 00-2 0z" />
    </svg>
  );
}

export default ReactIcon;
