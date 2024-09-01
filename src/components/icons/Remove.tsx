import { cn } from '@/utils/cn';
import { ClassValue } from 'clsx';
import React, { SVGProps } from 'react';

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'className'> {
  className?: ClassValue;
}

function Remove({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      className={cn(className)}
      fill="currentColor"
    >
      <path d="M8.375 9.375L5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1z"></path>
    </svg>
  );
}

export default React.memo(Remove);
