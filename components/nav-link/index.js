import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Link from 'next/link';
import React, { Children } from 'react';

const NavLink = ({ children, activeClassName, ...rest }) => {
  const { asPath } = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || '';
  const { href, as } = rest;

  // pages/index.js will be matched via props.href
  // pages/about.js will be matched via props.href
  // pages/[slug].js will be matched via props.as
  const className =
    asPath === href || asPath === as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;

  return (
    <Link {...rest}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
};

NavLink.propTypes = {
  children: PropTypes.node,
  activeClassName: PropTypes.string,
};

NavLink.defaultProps = {
  children: null,
  activeClassName: '-active',
};

export default NavLink;
