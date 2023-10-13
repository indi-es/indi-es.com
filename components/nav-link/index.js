import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { cloneElement, Children } from 'react';

function NavLink({ children, activeClassName, exact, ...rest }) {
  const { asPath, pathName } = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || '';
  const { href, as } = rest;

  const check = exact ? asPath : pathName;

  // pages/index.js will be matched via props.href
  // pages/about.js will be matched via props.href
  // pages/[slug].js will be matched via props.as
  const className =
    check === href || check === as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;

  return (
    <Link {...rest} legacyBehavior>
      {cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
}

NavLink.propTypes = {
  children: PropTypes.node,
  activeClassName: PropTypes.string,
  exact: PropTypes.bool,
};

NavLink.defaultProps = {
  children: null,
  activeClassName: '-active',
  exact: false,
};

export default NavLink;
