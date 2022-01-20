export default function guest({ next, store }) {
  if (localStorage.getItem('jwt')) {
    return next({
      name: 'Dashboard',
    });
  }

  return next();
}
