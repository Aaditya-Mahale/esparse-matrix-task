import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import "./Stats2.css"
function valuetext(value) {
  return `${value}°C`;
}

export default function ColorSlider() {
  return (
    <div className='stats2slider'>
      <h1 className='stats2slidertxt'>Stats Overview</h1>
      <br></br>
      Information about store visits

      <br></br>
      <br></br>
     

      Women
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Temperature"
        defaultValue={63}
        getAriaValueText={valuetext}
        color="Orange"
      />
      <br></br>
      Men
      <Slider
        aria-label="Temperature1"
        defaultValue={88}
        getAriaValueText={valuetext}
        color="red"
      />
      Kids
      <Slider
        aria-label="Temperature2"
        defaultValue={38}
        getAriaValueText={valuetext}
        color="cyan"
      />
    </Box>
    </div>
  );
}
