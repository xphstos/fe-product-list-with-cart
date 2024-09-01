import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from '@/components/App';
import { Products } from '@/components/Products';
import { Cart } from '@/components/Cart';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App>
      <header className="lg:col-start-1 lg:row-start-1">
        <h1 className="text-3xl font-bold md:text-4xl">Desserts</h1>
      </header>
      <Products />
      <Cart />
    </App>
  </StrictMode>
);
