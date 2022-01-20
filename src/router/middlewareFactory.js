export default function middlewareFactory(context, middleware, index) {
  const nextMiddleware = middleware[index];

  if (!nextMiddleware) {
    return context.next;
  }

  return () => {
    const nextPipeline = middlewareFactory(context, middleware, index + 1);

    nextMiddleware({ ...context, next: nextPipeline });
  };
}
