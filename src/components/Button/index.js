import React, {useState} from "react";
import xeact from "xeact";
import classNames from 'classnames';

/**
 * Box
 * @class
 *
 */

const Button = (
  {
    children,
    type,
    size = 'md',
    wide = false,
    block = false,
    circle = false,
    square = false,
    ghost = false,
    link = false,
    outline = false,
    active = false,
    disabled = false,
    glass = false,
    loading = false,
    noAnimation = false,
    htmlType = 'button',
    href,
    ...nativeProps
  },
) => {
  const [s, setS] = useState(1);
  const [a, setA] = useState(3);
  const tagName = link ? 'a' : 'button';
  const className = classNames(
    'btn',
    type ? `btn-${type}` : '',
    `btn-${size}`,
    {
      'btn-wide': wide,
      'btn-block': block,
      'btn-circle': circle,
      'btn-square': square,
      'btn-ghost': ghost,
      'btn-link': link,
      'btn-outline': outline,
      'btn-active': active,
      'btn-disabled': disabled,
      glass,
      loading,
      'no-animation': noAnimation,
    },
  );

  const props = {
    className,
    disabled,
    ...nativeProps,
  };

  props.href = link ? href : undefined;
  props.type = link ? undefined : htmlType;

  return React.createElement(tagName, props, <div onClick={() => {
    setS(s => s + 1)
  }
  }>{s}{a}<span x-ref="body"/></div>);
};

Button.observedAttributes = {
  size: '',
  type: '',
  square: '',
  loading: '',
  circle: '',
}

export default xeact('button', {isContainer: true})(Button)
