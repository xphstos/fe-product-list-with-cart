import { cn } from '@/utils/cn';
import { ClassValue } from 'clsx';
import React, { SVGProps } from 'react';

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'className'> {
  className?: ClassValue;
}

function AddToCart({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      viewBox="0 0 21 20"
      className={cn(className)}
    >
      <g clipPath="url(#a)">
        <path
          fill="currentColor"
          d="M6.583 18.75a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zm8.751 0a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM3.446 1.752a.625.625 0 00-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 00.612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 00.61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248z"
        ></path>
        <path
          fill="currentColor"
          d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5z"
        ></path>
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M.333 0h20v20h-20z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default React.memo(AddToCart);
