import React from "react";

import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";

import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack>
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <Stack>
        <link></link>
        <a href="#exercises">Exercises</a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
