import { cn } from '@/utils/cn';
import { ClassValue } from 'clsx';
import React, { SVGProps } from 'react';

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'className'> {
  className?: ClassValue;
}

function Minus({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="2"
      viewBox="0 0 10 2"
      className={cn(className)}
      fill="currentColor"
    >
      <path d="M0 .375h10v1.25H0V.375z"></path>
    </svg>
  );
}

export default React.memo(Minus);
