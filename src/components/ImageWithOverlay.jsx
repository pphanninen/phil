import React, { Component } from "react";
import styled from "styled-components";

const StyledImageContainer = styled.div`
  width: 600px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.bgColor};
    z-index: 1;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;

const StyledImageContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

class ImageContent extends Component {
  render() {
    return (
      <StyledImageContent>
        {this.props.children}
      </StyledImageContent>
    );
  }
}

class ImageWithOverlay extends Component {
  render() {
    return (
      <StyledImageContainer bgColor={this.props.bgColor}>
        <StyledImage src={this.props.imgSrc} />
        <ImageContent>{this.props.children}</ImageContent>
      </StyledImageContainer>
    );
  }
}

export default ImageWithOverlay;
