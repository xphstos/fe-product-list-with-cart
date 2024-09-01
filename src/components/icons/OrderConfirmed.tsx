import { cn } from '@/utils/cn';
import { ClassValue } from 'clsx';
import React, { SVGProps } from 'react';

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'className'> {
  className?: ClassValue;
}

function OrderConfirmed({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="currentColor"
      className={cn(className)}
    >
      <path d="M21 32.121l-7.5-7.502 2.12-2.119L21 27.879 32.377 16.5l2.123 2.122L21 32.121z"></path>
      <path d="M24 3a21 21 0 100 42 21 21 0 000-42zm0 39a18 18 0 110-36.001A18 18 0 0124 42z"></path>
    </svg>
  );
}

export default React.memo(OrderConfirmed);
