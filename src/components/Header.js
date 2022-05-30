import React from "react";

import Typography from "@mui/material/Typography";


import AddIcon from '@mui/icons-material/Add';
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import InstagramIcon from "@mui/icons-material/Instagram"

const Header = () => {
  return (
    <>
      <div className="appbar">
        <div className="title">
          <h1>Sudeep</h1>
        </div>
        <div className="menu">
          <ul>
            <li>
              <AddIcon />
            </li>
            <li>
              <LinkedInIcon />
            </li>
            <li>
              <InstagramIcon />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
