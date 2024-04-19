'use client';

import PropTypes from 'prop-types';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import classNames from 'classnames';

function NavLink({
  children,
  activeClassName = '-active',
  className,
  exact,
  ...props
}) {
  const pathname = usePathname();
  const isActive = exact
    ? pathname === props.href
    : pathname.startsWith(props.href);

  const customClassName = classNames(className, {
    [activeClassName]: isActive,
  });

  return (
    <Link className={customClassName} {...props}>
      {children}
    </Link>
  );
}

NavLink.propTypes = {
  children: PropTypes.node,
  activeClassName: PropTypes.string,
  className: PropTypes.string,
  exact: PropTypes.bool,
  href: PropTypes.string,
};

export default NavLink;
