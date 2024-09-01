import { CartProduct } from '@/types';
import { cn } from '@/utils/cn';
import priceFormat from '@/utils/priceFormat';
import { ClassValue } from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import Remove from './icons/Remove';
import { useCartStore } from '@/store';

interface ProductCardInCart
  extends Omit<ComponentPropsWithoutRef<'article'>, 'className' | 'id'>,
    CartProduct {
  className?: ClassValue;
}

export const ProductCardInCart = ({
  className,
  ...product
}: ProductCardInCart) => {
  const { name, price, quantity, id } = product;
  const removeProduct = useCartStore((s) => s.removeProduct);

  return (
    <article
      className={cn(
        'grid grid-cols-[1fr_min-content] gap-1 border-b border-b-rose-100 py-4',
        className
      )}
    >
      <h3 className="font-semibold">{name}</h3>
      <div className="row-span-2 flex items-center justify-center">
        <button
          type="button"
          className="flex aspect-square min-h-10 text-rose-300 transition-colors hocus:text-rose-900"
          onClick={() => removeProduct(id)}
        >
          <figure className="m-auto rounded-full border-[.1em] p-[3px]">
            <Remove className="size-3" />
          </figure>
        </button>
      </div>
      <div className="flex gap-2 text-rose-400">
        <span className="font-semibold text-red">{quantity}x</span>
        <span>@{priceFormat(price)}</span>
        <strong className="font-semibold">
          {priceFormat(quantity * price)}
        </strong>
      </div>
    </article>
  );
};
