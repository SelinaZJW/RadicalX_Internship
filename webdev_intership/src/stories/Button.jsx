import React from 'react';
import PropTypes from 'prop-types';
// import CSSModules from 'react-css-modules';
import styles from './button.module.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ variant, width, size, backgroundColor, fontFamily, styling, children, ...props }) => {

  return (
    <button
      type="button"
      className={`${styles[`storybook-button`]} ${styles[`storybook-button--${size}`]}  ${styles[`storybook-button--${variant}`]}`}
      // className={['storybook-button', `storybook-button--${size}`, `storybook-button--${variant}`].join(' ')}
      // style={{width: width, backgroundColor : backgroundColor, fontFamily: fontFamily}}
      style={styling}
      //can customize styling with styling or id with module.css
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  // primary: PropTypes.bool,
  variant: PropTypes.oneOf(["primary", "secondary", "disabled", "basic"]),
  /**
   * What background color to use
   */
  width: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontFamily: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  // label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  width: null,
  fontFamily: null,
  // primary: false,
  size: 'medium',
  onClick: undefined,
};

// export default CSSModules(Button, styles)
