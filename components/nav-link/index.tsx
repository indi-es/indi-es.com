import type { ReactElement } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import type { LinkProps } from 'next/link';
import { cloneElement, Children } from 'react';

type NavLinkProps = LinkProps & {
  children: ReactElement<{ className?: string }>;
  activeClassName?: string;
  exact?: boolean;
  nested?: boolean;
};

function NavLink({
  children,
  activeClassName = '-active',
  exact = false,
  nested = false,
  ...rest
}: NavLinkProps) {
  const { asPath, pathname } = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || '';
  const { href, as } = rest;

  const check = exact ? asPath : pathname;

  // pages/index.js will be matched via props.href
  // pages/about.js will be matched via props.href
  // pages/[slug].js will be matched via props.as
  const isNested = nested && asPath.split(/[?#]/)[0].startsWith(`${href}/`);
  const className =
    check === href || check === as || isNested
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;

  return (
    <Link {...rest} legacyBehavior>
      {cloneElement(child, {
        className: className || undefined,
      })}
    </Link>
  );
}

export default NavLink;
