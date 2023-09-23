import React from "react";
import { Box, Button, Typography } from "@mui/material";
import styles from "./styles";
import Timer from "../../components/Timer/Timer";

const Home = () => {
	return (
		<Box sx={{ ...styles.mainContainer }}>
			<Button variant="contained" sx={{ ...styles.button }}>Wood Working</Button>
			<Button variant="contained" sx={{ ...styles.button }}> Cartography </Button>
			<Button variant="contained" sx={{ ...styles.button }}> Sailing</Button>
			<Button variant="contained" sx={{ ...styles.button }}>Fishing</Button>
			<Button variant="contained" sx={{ ...styles.button }}>Astronomy</Button>
		</Box>
	);
};

export default Home;

// const Home = () => {
// 	return (
// 		<Box sx={{ ...styles.mainContainer }}>
// 			<Box sx={{ ...styles.skillBox }}>
//                 <Timer />
//             </Box>
// 		</Box>
// 	);
// };
