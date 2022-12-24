import React from 'react';
import 'chart.js/auto'
import {Doughnut} from 'react-chartjs-2';

const data = {
  labels: [
    'Red',
    'Green',
    'Yellow'
],
datasets: [{
  data: [300, 50, 100],
  backgroundColor: [
  '#FF6384',
  '#36A2EB',
  '#FFCE56'
  ],
  hoverBackgroundColor: [
  '#FF6384',
  '#36A2EB',
  '#FFCE56'
  ]
}]
};

export default () => (
<div className='w-80'>
<Doughnut
     data={data}
     width={400}
     height={400}
  />
</div>
);
