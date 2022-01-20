export default function auth({ next, store }) {
  if (!localStorage.getItem('jwt')) {
    return next({
      name: 'Login',
    });
  }

  return next();
}
