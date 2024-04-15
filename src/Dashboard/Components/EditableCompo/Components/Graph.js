import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import "./Graph.css"
const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490, 1890, 2390, 3490,9800, 3908];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300, 1398, 9800, 3908.2390, 3490];
const xLabels = [
  'Jan',
  'Feb',
  'March',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',

];

export default function SimpleBarChart() {
  return (
    <div className='graphchart1'>
    <BarChart
      width={855}
      height={320}
      series={[
        { data: pData, id: 'pvId' },
        { data: uData,  id: 'uvId' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />
    </div>
  );
}