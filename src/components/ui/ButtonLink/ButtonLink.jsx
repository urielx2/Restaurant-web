import { HashLink } from "react-router-hash-link";

export const ButtonLink = ({ href, text, className }) => {
  return (
    <HashLink
      smooth
      to={href}
      className={`py-2 px-3 ${className} rounded-md transition-colors duration-300`}
    >
      {text}
    </HashLink>
  );
};
