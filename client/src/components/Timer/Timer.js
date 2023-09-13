// import React, {useState} from 'react'
// import { Box, Button } from "@mui/material";
// import styles from "./styles";

// const Timer = () => {
//     const [seconds, setSeconds] = useState(0)
//     const [paused, setPaused] = useState(false)

//     const startTimer = () => {

//       setInterval(() => {
//           setSeconds(seconds => seconds + 1)
//       }, 1000)

//       document.querySelector('.start-button').setAttribute("disabled", "true")
//       document.querySelector('.stop-button').removeAttribute("disabled")


//           const pauseButton = document.createElement("button")
//           pauseButton.innerText = 'pause'
//           pauseButton.className="pause-button"
//           document.querySelector('.counter-container').appendChild(pauseButton)
//           pauseButton.addEventListener("click", () => {
//               if (pauseButton.innerText === "pause"){
//                   pauseButton.innerText = "resume"
//               } else {
//                   pauseButton.innerText = 'pause'
//               }
//           })


// }

// const stopTimer = () => {
//   clearInterval(setSeconds(0))

//   if (!!document.querySelector('#counter')){
//       document.querySelector('#counter').remove()
//   }
//   document.querySelector('.stop-button').setAttribute("disabled", "true")
//   document.querySelector('.start-button').removeAttribute("disabled")
//   document.querySelector('.pause-button').remove()
// }
//     const currentCount = seconds
//   return (
//     <Box className="counter-container">
//         <Button className="start-button" onClick={startTimer}>start</Button>
//         <Button className="stop-button" onClick={stopTimer}>stop</Button>
//         <p id="counter">{currentCount}</p>
//     </Box>
//   )
// }

// export default Timer

import { useTimer } from "./useTimer";

const Timer = () => {
    const { seconds, start, stop } = useTimer();

    return (
        <div className="counter-container">
            <button className="start-button" onClick={start}>
                start
            </button>
            <button className="stop-button" onClick={stop}>
                stop
            </button>
            <p id="counter">{seconds}</p>
        </div>
    );
};

export default Timer;