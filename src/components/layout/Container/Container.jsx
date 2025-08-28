export const Container = ({ children, className }) => {
  return (
    <section className={`container mx-auto py-20 px-3 lg:px-0 ${className}`}>
      {children}
    </section>
  );
};
