import { useCartStore } from '@/store';
import { cn } from '@/utils/cn';
import { ClassValue } from 'clsx';
import {
  ComponentProps,
  ElementRef,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { ProductCardInCart } from './ProductCardInCart';
import CarbonNeutral from './icons/CarbonNeutral';
import priceFormat from '@/utils/priceFormat';
import OrderConfirmed from './icons/OrderConfirmed';
import { ProductPreview } from './ProductPreview';

interface Cart extends Omit<ComponentProps<'aside'>, 'className'> {
  className?: ClassValue;
}

export const Cart = ({ className }: Cart) => {
  const confirmationDialog = useRef<ElementRef<'dialog'>>(null);
  const [showCart, setShowCart] = useState(false);
  const cart = useCartStore((s) => s.cart);
  const orderConfirmed = useCartStore((s) => s.orderConfirmed);
  const setOrderConfirmed = useCartStore((s) => s.setOrderConfirmed);
  const resetCart = useCartStore((s) => s.resetCart);

  const totals = useMemo(
    () =>
      cart.reduce(
        (total, p) => ({
          inCart: (total.inCart += p.quantity),
          order: (total.order += p.quantity * p.price)
        }),
        {
          inCart: 0,
          order: 0
        }
      ),
    [cart]
  );

  useEffect(() => {
    if (!confirmationDialog.current) return;
    if (orderConfirmed) {
      confirmationDialog.current.showModal();
    }
    if (!orderConfirmed) {
      confirmationDialog.current.close();
    }
  }, [orderConfirmed]);

  return (
    <>
      <aside
        className={cn(
          // Mobile
          'inset-[0_0_0_auto] z-10 w-[min(24rem,100%)] translate-x-full space-y-6 bg-white p-4 opacity-0 shadow-[0_0_0_100vmax_hsla(0deg,0%,0%,0.50)] transition-all',
          {
            'translate-x-0 opacity-100': showCart
          },
          // Desktop
          'lg:shadow-rose-900/5 fixed lg:sticky lg:top-10 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:translate-x-0 lg:self-start lg:rounded-xl lg:p-6 lg:opacity-100 lg:shadow-sm',
          className
        )}
      >
        <h2 className="text-3xl font-bold text-red">
          Your Cart ({totals.inCart})
        </h2>
        {cart.length ? (
          <>
            <ul>
              {cart.map((p) => {
                return (
                  <li key={`cart-item-${p.id}`}>
                    <ProductCardInCart {...p} />
                  </li>
                );
              })}
            </ul>
            {totals.order && (
              <div className="flex items-center justify-between gap-6">
                Order Total
                <strong className="text-2xl">
                  {priceFormat(totals.order)}
                </strong>
              </div>
            )}
            <article
              role="note"
              className="flex items-center justify-center gap-2 rounded-lg bg-rose-50 py-4"
            >
              <CarbonNeutral className="fill-green" />
              <p>
                This is a <b className="font-semibold">carbon-neutral</b>{' '}
                delivery
              </p>
            </article>
            <button
              type="button"
              className="min-h-12 w-full rounded-full bg-red px-6 py-3 font-semibold text-rose-50 transition-colors focus:outline-none hocus-visible:bg-rose-500"
              onClick={() => setOrderConfirmed(true)}
            >
              Confirm Order
            </button>
          </>
        ) : (
          <>
            <figure className="mt-4 flex justify-center place-self-auto">
              <img
                src="/images/illustration-empty-cart.svg"
                alt=""
                role="presentation"
              />
            </figure>
            <p className="text-center font-semibold text-rose-400">
              Your added items will appear here
            </p>
          </>
        )}
      </aside>
      <dialog
        ref={confirmationDialog}
        className="[&::backdrop]:bg-black/70 w-[min(32rem,100%)] max-w-full space-y-6 rounded-xl p-6 md:p-8"
        onClose={() => setOrderConfirmed(false)}
      >
        <header className="mt-6 md:md:mt-0">
          <OrderConfirmed className="text-green md:mb-6" />
          <h3 className="my-2 text-3xl font-bold">Order Confirmed</h3>
          <p className="text-rose-400">We hope you enjoy your food!</p>
        </header>
        <div className="rounded-lg bg-rose-100 px-6 py-2">
          <ul>
            {cart.map((p) => {
              return (
                <li key={`cart-item-${p.id}`}>
                  <ProductPreview {...p} />
                </li>
              );
            })}
          </ul>
          {totals.order && (
            <div className="flex items-center justify-between gap-6 py-4">
              Order Total
              <strong className="text-2xl">{priceFormat(totals.order)}</strong>
            </div>
          )}
        </div>
        <footer>
          <button
            type="button"
            className="min-h-12 w-full rounded-full bg-red px-6 py-3 font-semibold text-rose-50 transition-colors focus:outline-none hocus-visible:bg-rose-500"
            onClick={() => {
              resetCart();
              setOrderConfirmed(false);
              setShowCart(false);
            }}
          >
            Start New Order
          </button>
        </footer>
      </dialog>
      <button
        className="fixed bottom-8 right-8 z-10 min-h-10 rounded-full bg-red px-4 font-semibold text-white hocus-visible:bg-rose-500 lg:hidden"
        type="button"
        onClick={() => setShowCart((v) => !v)}
      >
        Cart ({totals.inCart})
      </button>
    </>
  );
};
