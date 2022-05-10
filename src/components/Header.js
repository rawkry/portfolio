import { Container } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Container sx={12} md={12} lg={12}>
      <div className="app_bar">
        <div className="container_main">

     
          <div className="container">
              <div id="hour"></div>
              <div id="minute"></div>
              <div id="second"></div>

          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
