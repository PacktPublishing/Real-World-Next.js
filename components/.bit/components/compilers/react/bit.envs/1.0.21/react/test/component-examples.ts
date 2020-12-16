const NormalButtonComponent = `
import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6

class NormalButton extends Component {
  render() {
    const object = {}
    const foo = object.foo ?? 'default';
    const { text, backgroundColor, width, height, style } = this.props;
    return (
      <button
        onClick={() => this.props.onClick()}
        style={{
          height,
          width,
          backgroundColor,
          ...style,
        }}
      >{text.toUpperCase()}</button>
    );
  }
}

NormalButton.propTypes = {
  text: PropTypes.string,
  backgroundColor: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  onPress: PropTypes.func,
  style: PropTypes.object,
};

NormalButton.defaultProps = {
  text: 'Button',
  backgroundColor: '#fafafa',
  width: 120,
  height: 50,
  style: {},
};

export default NormalButton;
`;

export { NormalButtonComponent };
