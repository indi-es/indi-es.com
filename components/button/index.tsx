import type { ComponentPropsWithoutRef } from 'react';
import classNames from 'classnames';

import style from './style.module.css';

type LinkButtonProps = ComponentPropsWithoutRef<'a'> & {
  href: string;
};

function LinkButton({ children, href, ...rest }: LinkButtonProps) {
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}

type InputButtonProps = ComponentPropsWithoutRef<'button'>;

function InputButton(props: InputButtonProps) {
  return <button type="button" {...props} />;
}

export type ButtonProps = Omit<
  ComponentPropsWithoutRef<'a'> & ComponentPropsWithoutRef<'button'>,
  'href'
> & {
  href?: string;
};

function Button({ href, children, className, ...rest }: ButtonProps) {
  const customClassName = classNames(className, style.button, 'button');

  if (href) {
    return (
      <LinkButton className={customClassName} href={href} {...rest}>
        {children}
      </LinkButton>
    );
  }

  return (
    <InputButton className={customClassName} {...rest}>
      {children}
    </InputButton>
  );
}

export default Button;
