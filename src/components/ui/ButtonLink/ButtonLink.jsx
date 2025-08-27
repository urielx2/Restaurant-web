export const ButtonLink = ({ href, text, className }) => {
  return (
    <a
      href={href}
      className={`py-2 px-3 ${className} rounded-md transition-colors duration-300`}
    >
      {text}
    </a>
  );
};
