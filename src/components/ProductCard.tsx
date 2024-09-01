import { CartProduct, Product } from '@/types';
import { cn } from '@/utils/cn';
import priceFormat from '@/utils/priceFormat';
import { ClassValue } from 'clsx';
import { ComponentPropsWithoutRef, useMemo } from 'react';
import AddToCart from '@/components/icons/AddToCart';
import { useCartStore } from '@/store';
import Minus from './icons/Minus';
import Plus from './icons/Plus';

interface ProductCard
  extends Omit<ComponentPropsWithoutRef<'article'>, 'className' | 'id'>,
    Product {
  className?: ClassValue;
}

export const ProductCard = ({ className, ...product }: ProductCard) => {
  const { id, image, name, price, category } = product;
  const cart = useCartStore((s) => s.cart);
  const addToCart = useCartStore((s) => s.addToCart);
  const increaseQ = useCartStore((s) => s.increaseQ);
  const decreaseQ = useCartStore((s) => s.decreaseQ);

  const inCart = useMemo<CartProduct | undefined>(
    () => cart.filter((p) => p.id === id)[0],
    [cart, id]
  );

  return (
    <article className={cn('grid', className)}>
      <picture
        className={cn(
          'w-full overflow-clip rounded-md border-2 border-[transparent] object-cover transition-colors sm:aspect-square',
          {
            'border-red': inCart
          }
        )}
      >
        <source srcSet={image.desktop} media="(min-width: 1024px)" />
        <source srcSet={image.tablet} media="(min-width: 768px)" />
        <source srcSet={image.mobile} media="(min-width: 475px)" />
        <img
          src={image.tablet}
          alt=""
          role="presentation"
          className="w-full object-cover object-center sm:aspect-square"
        />
      </picture>
      {inCart ? (
        <div className="flex h-12 w-10/12 -translate-y-1/2 items-center justify-between gap-4 justify-self-center rounded-full bg-red px-2 text-white">
          <button
            type="button"
            className="group flex aspect-square min-h-8 rounded-full"
            onClick={() => decreaseQ(id)}
          >
            <figure className="m-auto rounded-full border-[.1em] border-white p-[3px] transition-colors group-hover:bg-white group-hover:text-red group-focus-visible:bg-white group-focus-visible:text-red">
              <Minus className="size-3" />
            </figure>
          </button>
          {inCart.quantity}
          <button
            type="button"
            className="group flex aspect-square min-h-8 rounded-full"
            onClick={() => increaseQ(id)}
          >
            <figure className="m-auto rounded-full border-[.1em] border-white p-[3px] transition-colors group-hover:bg-white group-hover:text-red group-focus-visible:bg-white group-focus-visible:text-red">
              <Plus className="size-3" />
            </figure>
          </button>
        </div>
      ) : (
        <div className="flex -translate-y-1/2 justify-center">
          <button
            type="button"
            className="group/button flex h-12 w-10/12 items-center justify-center gap-2 justify-self-center rounded-full border border-rose-500 bg-white px-7 font-semibold transition-all hocus-visible:border-red hocus-visible:bg-red hocus-visible:text-white"
            onClick={() => addToCart(id)}
          >
            <AddToCart className="text-red group-hover/button:text-white group-focus-visible/button:text-white" />
            Add to Cart
          </button>
        </div>
      )}
      <header>
        <p className="text-rose-400">{category}</p>
        <h3 className="text-lg font-semibold">{name}</h3>
        <div className="text-lg font-semibold text-red">
          {priceFormat(price)}
        </div>
      </header>
    </article>
  );
};
