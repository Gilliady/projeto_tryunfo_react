import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { className, type, name, value, id, handler, placeHolder } = this.props;
    return (
      <input
        className={ className }
        type={ type }
        name={ name }
        value={ value }
        onChange={ handler }
        id={ id }
        data-testid={ id }
        placeholder={ placeHolder }
      />
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes
    .oneOfType([PropTypes.string, PropTypes.bool, PropTypes.number]).isRequired,
  id: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  placeHolder: PropTypes.string,
  className: PropTypes.string,
};

Input.defaultProps = {
  placeHolder: '',
  className: '',
};

export default Input;
