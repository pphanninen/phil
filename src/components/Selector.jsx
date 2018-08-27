import React, { Component } from 'react';
import styled from 'styled-components';

const CustomStyles = styled.input`
  & + label:before {
    left: -1rem;
    top: 0.5em;
    width: 1.5em;
    height: 1.5em;
  }
`;

const StyledSelector = styled(CustomStyles)`
  position: relative;
  left: -99999px;
  top: -99999px;

  & + label:before {
    position: relative;
    content: '';
    background-size: contain;
    background-repeat: no-repeat;
    background-image: ${props => props.nSvg};
    display: inline-block;
  }

  &:checked + label:before {
    background-image: ${props => props.ySvg};
  }
`;

class Selector extends Component {
  createSvgForCSS(svg) {
    return `url('data:image/svg+xml;utf8,${svg}')`;
  }

  render() {
    return (
      <div>
        <StyledSelector
          type={this.props.type}
          id={this.props.id ? this.props.id : this.props.name}
          name={this.props.name}
          ySvg={this.createSvgForCSS(this.props.ySvg)}
          nSvg={this.createSvgForCSS(this.props.nSvg)}
        />
        <label htmlFor={this.props.id ? this.props.id : this.props.name}>
          {this.props.label}
        </label>
      </div>
    );
  }
}


export default Selector;
