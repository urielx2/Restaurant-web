export const Container = ({ children, className, id }) => {
  return (
    <section
      id={id}
      className={`container mx-auto py-20 px-5 lg:px-0 ${className}`}
    >
      {children}
    </section>
  );
};
