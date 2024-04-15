import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Gauge } from '@mui/x-charts/Gauge';
import "./Gauge.css"
export default function GaugeValueRangeNoSnap() {
  return (
    <div className='Gaugetxt'>
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }}>
      <Gauge width={100} height={100} value={50} New Seller Register />
     
      <Gauge width={100} height={100} value={50} valueMin={10} valueMax={60} />
    </Stack>
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }}>
      <Gauge width={100} height={100} value={50} />
      <Gauge width={100} height={100} value={50} valueMin={10} valueMax={60} />
    </Stack>
    </div>
  );
}