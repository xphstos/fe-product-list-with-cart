import { cn } from '@/utils/cn';
import { ClassValue } from 'clsx';
import React, { SVGProps } from 'react';

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'className'> {
  className?: ClassValue;
}

function Plus({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="currentColor"
      className={cn(className)}
    >
      <path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25z"></path>
    </svg>
  );
}

export default React.memo(Plus);
