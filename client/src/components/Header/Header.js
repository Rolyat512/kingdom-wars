import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import styles from "./styles";
import "./header.css"

const Header = () => {
  return (
    <Box sx={{ ...styles.mainContainer }}>
      <div className="headerTitle"> Kingdom Wars </div>
    </Box>
  )
}

export default Header;
