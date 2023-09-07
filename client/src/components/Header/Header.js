import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import styles from "./styles";

const Header = () => {
  return (
    <Box sx={{ ...styles.mainContainer }}>
      <div> Kingdom Wars </div>
    </Box>
  )
}

export default Header;
