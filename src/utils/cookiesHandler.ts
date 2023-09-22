import Cookies from 'js-cookie';

interface CookieOptions {
  expires?: number | Date;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: 'strict' | 'lax' | 'none';
  httpOnly?: boolean;
}

// Set a cookie
export const setCookie = (
  key: string,
  value: string,
  options?: CookieOptions
) => {
  Cookies.set(key, value, options);
};

// Get a cookie
export const getCookie = (key: string): string | undefined => {
  return Cookies.get(key);
};

// Remove a cookie
export const removeCookie = (key: string, options?: CookieOptions) => {
  Cookies.remove(key, options);
};
