import { cn } from '@/utils/cn';
import { ClassValue } from 'clsx';
import { ComponentPropsWithRef } from 'react';
import { ProductCard } from '@/components/ProductCard';
import { useCartStore } from '@/store';

interface Products extends Omit<ComponentPropsWithRef<'section'>, 'className'> {
  className?: ClassValue;
}

export const Products = ({ className }: Products) => {
  const products = useCartStore((s) => s.products);
  return (
    <section
      className={cn(
        'col-start-1 grid gap-6 sm:grid-cols-2 xl:grid-cols-3',
        className
      )}
    >
      {products.map((p) => {
        return <ProductCard key={p.id} {...p} />;
      })}
    </section>
  );
};
