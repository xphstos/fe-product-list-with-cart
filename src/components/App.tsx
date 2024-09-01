import { ComponentPropsWithRef } from 'react';

export const App = ({
  children
}: {
  children: ComponentPropsWithRef<'main'>['children'];
}) => {
  return (
    <main className="mx-auto grid gap-8 px-6 py-8 lg:grid-cols-[1fr_24rem] lg:p-10 xl:max-w-[76rem]">
      {children}
    </main>
  );
};
