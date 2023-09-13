import React from "react";
import { Box } from "@mui/material";
import styles from "./styles";
import Timer from '../../components/Timer/Timer';


const Home = () => {
	return (
		<Box sx={{ ...styles.mainContainer }}>
			<Box sx={{ ...styles.skillBox }}>
                <Timer />
            </Box>
		</Box>
	);
};

export default Home;

