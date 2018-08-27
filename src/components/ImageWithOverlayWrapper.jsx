import React, { Component } from "react";
import styled from "styled-components";

import ImageWithOverlay from "./ImageWithOverlay";

const Content = styled.h1`
  color: white;
`;

class ImageWithOverlayWrapper extends Component {
  render() {
    const img = "https://images.unsplash.com/photo-1520597625524-4cf6a97bb8be?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=960b020c8c130919bafa1e2fa11b193d";

    return (
      <div>
        <h1>Image With Overlay</h1>
        <p>Often used as hero image, in various types of card layouts etc</p>

        <ImageWithOverlay
          imgSrc={img}
          bgColor={"rgba(0,0,0,0.6)"}
        >
          <Content>Moi Maailma</Content>
        </ImageWithOverlay>
      </div>
    );
  }
}

export default ImageWithOverlayWrapper;
