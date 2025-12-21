import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing-intl';
 
export default createMiddleware(routing);
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(da|en)/:path*']
};
