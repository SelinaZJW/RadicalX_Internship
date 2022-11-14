import React from 'react';
import PropTypes from 'prop-types';
// import CSSModules from 'react-css-modules';
import styles from './input.module.css';

/**
 * Primary UI component for user interaction
 */
export const Input = ({ type, name, variant, children, placeholder, icon, styling, onChange, value, ...props }) => {

  return (
    // <input
    //   type={type}
    //   className={`${styles[`storybook-input`]} ${styles[`storybook-input--${size}`]}  ${styles[`storybook-input--${variant}`]}`}
    //   // className={['storybook-input', `storybook-input--${size}`, `storybook-input--${variant}`].join(' ')}
    //   style={{width: width, backgroundColor : backgroundColor, fontFamily: fontFamily}}
    //   {...props}
    // >
    //   {children}
    // </input>
    <div className={`${styles["inner-addon"]} ${styles[`${variant}`]}`} style={styling}>
      <i className={`${icon} ${styles["bi"]}`}></i>
      <input type={type} className={`form-control ${styles["input"]}`} placeholder={placeholder} name={name} onChange={onChange} value={value}/>
    </div>
  );
};

Input.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  // primary: PropTypes.bool,
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.string,
  variant: PropTypes.oneOf(["left", "right"]),
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  onChange: PropTypes.func
  /**
   * What background color to use
   */
  // width: PropTypes.string,
  // backgroundColor: PropTypes.string,
  // fontFamily: PropTypes.string,
  /**
   * How large should the input be?
   */
  // size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Input contents
   */
  // label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  // onClick: PropTypes.func,
};

Input.defaultProps = {
  backgroundColor: null,
  width: null,
  fontFamily: null,
  // primary: false,
  size: 'medium',
  onClick: undefined,
};

// export default CSSModules(Input, styles)
