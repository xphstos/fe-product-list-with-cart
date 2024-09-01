import { cn } from '@/utils/cn';
import { ClassValue } from 'clsx';
import React, { SVGProps } from 'react';

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'className'> {
  className?: ClassValue;
}
function CarbonNeutral({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      viewBox="0 0 21 20"
      className={cn(className)}
      fill="currentColor"
    >
      <path d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 01.607 1.072V17.5A1.25 1.25 0 018 18.75z"></path>
      <path d="M14.25 18.75h-1.875a1.25 1.25 0 01-1.25-1.25v-6.875h3.75a2.498 2.498 0 002.488-2.747 2.594 2.594 0 00-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 00-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 005.5 5a2.5 2.5 0 100 5v1.25a3.75 3.75 0 010-7.5h.05a5.019 5.019 0 014.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 013.868 3.384 3.75 3.75 0 01-3.733 4.116h-2.5V17.5h1.875v1.25z"></path>
    </svg>
  );
}

export default React.memo(CarbonNeutral);
