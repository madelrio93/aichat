import type { SVGProps } from 'react';

export const MessageIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="2em"
      height="2em"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M2 4h28v18H16l-8 7v-7H2Z"
      ></path>
    </svg>
  );
};
