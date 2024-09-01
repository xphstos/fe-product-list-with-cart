import { CartProduct, Product } from '@/types';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import { products } from '@/_data';

export type StateT = {
  products: Product[];
  cart: CartProduct[] | [];
  orderConfirmed: boolean;
};

type ActionsT = {
  addToCart: (id: Product['id']) => void;
  resetCart: () => void;
  increaseQ: (id: Product['id']) => void;
  decreaseQ: (id: Product['id']) => void;
  removeProduct: (id: Product['id']) => void;
  setOrderConfirmed: (v: StateT['orderConfirmed']) => void;
};

export const useCartStore = create<StateT & ActionsT>()(
  persist(
    (set, get) => ({
      products: products,
      cart: [],
      orderConfirmed: false,
      setOrderConfirmed: (orderConfirmed) => {
        set({ orderConfirmed });
      },
      resetCart: () => set({ cart: [] }),
      addToCart: (id) => {
        const productToAdd = get().products.filter((p) => p.id === id)[0];
        set(({ cart }) => ({
          cart: [...cart, { ...productToAdd, quantity: 1 }]
        }));
      },
      removeProduct: (id) =>
        set(({ cart }) => ({ cart: cart.filter((p) => p.id !== id) })),
      increaseQ: (id) => {
        set(({ cart }) => ({
          cart: cart.map((p) => {
            if (p.id === id) {
              return {
                ...p,
                quantity: p.quantity ? ++p.quantity : 1
              };
            }
            return p;
          })
        }));
      },
      decreaseQ: (id) => {
        let newQ;
        const cart = get().cart.map((p) => {
          if (p.id === id) {
            newQ = --p.quantity;
            return {
              ...p,
              quantity: newQ
            };
          }
          return p;
        });

        if (newQ) {
          set({ cart });
          return;
        }

        get().removeProduct(id);
      }
    }),
    {
      name: 'products-cart-storage',
      // partialize: (state) => state.cart,
      storage: createJSONStorage(() => sessionStorage)
    }
  )
);

mountStoreDevtool('ProductCartStore', useCartStore);
