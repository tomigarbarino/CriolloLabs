import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from '@/config/i18n';

export default createMiddleware({
    // A list of all locales that are supported
    locales,

    // Used when no locale matches
    defaultLocale,

    // Always redirect to a locale (e.g. / -> /es)
    localePrefix: 'always'
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(es|en)/:path*']
};
