export const isRouteActive = (pathname, href) => {
  if (!href) return false;
  if (href === '/') return pathname === '/';
  return pathname.startsWith(href);
};

export const isDropdownActive = (pathname, items) => {
  if (!items) return false;
  return items.some((item) => !item.isExternal && isRouteActive(pathname, item.href));
};
