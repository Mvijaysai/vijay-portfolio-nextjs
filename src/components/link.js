import NextLink from 'next/link';

const Link = ({
  href,
  children,
  className,
  ...props
}) => {

  return (
    <NextLink href={href || ''} passHref legacyBehavior >
      <a {...props}>
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
