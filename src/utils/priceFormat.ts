export default (
  price: number | bigint,
  locale: Intl.LocalesArgument = 'en-US',
  options?: Intl.NumberFormatOptions
): string =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'USD',
    ...options
  }).format(price);
