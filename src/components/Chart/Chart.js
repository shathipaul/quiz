import React from 'react';
import { useLoaderData } from 'react-router-dom'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const Chart = () => {
  const chartData = useLoaderData();

  const data = chartData.data;


  return (
    <div className='flex justify-center items-center h-screen '>
      <div>
        <h2 className='text-5xl text-center font-bold text-pink-400 mb-5'>Chart</h2>
        <BarChart width={530} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar barSize={40} dataKey="total">
            {data.map((cd) => (
              <Cell cursor="pointer" fill={"#0C0F42"} key={`cell-${cd}`} />
            ))}
          </Bar>
        </BarChart>


      </div>
    </div>
  );
};

export default Chart;