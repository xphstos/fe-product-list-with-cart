import { CartProduct } from '@/types';
import { cn } from '@/utils/cn';
import priceFormat from '@/utils/priceFormat';
import { ClassValue } from 'clsx';
import { ComponentPropsWithoutRef } from 'react';

interface ProductPreview
  extends Omit<ComponentPropsWithoutRef<'article'>, 'className' | 'id'>,
    CartProduct {
  className?: ClassValue;
}

export const ProductPreview = ({ className, ...product }: ProductPreview) => {
  const { name, price, quantity, image } = product;

  return (
    <article
      className={cn(
        'border-b-rose-200/30 grid grid-cols-[3rem_1fr_min-content] gap-4 border-b py-4',
        className
      )}
    >
      <figure className="relative overflow-clip rounded-md">
        <img
          className="size-full object-cover object-center"
          src={image.thumbnail}
          alt=""
          role="presentation"
        />
      </figure>
      <div>
        <h3 className="font-semibold">{name}</h3>
        <div className="flex gap-2 text-rose-400">
          <span className="font-semibold text-red">{quantity}x</span>
          <span>@{priceFormat(price)}</span>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <strong className="font-semibold">
          {priceFormat(quantity * price)}
        </strong>
      </div>
    </article>
  );
};
