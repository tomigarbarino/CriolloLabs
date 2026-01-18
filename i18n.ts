import { getRequestConfig } from 'next-intl/server';
import { locales, type Locale } from './src/config/i18n';

export default getRequestConfig(async ({ locale }) => {
  // If no locale provided or invalid, default to 'es'
  const validLocale = locale && locales.includes(locale as Locale) ? locale : 'es';

  return {
    locale: validLocale,
    messages: (await import(`./messages/${validLocale}.json`)).default
  };
});
