import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const ChartDetail = ({chartData}) => {
     const {name, total} = chartData;
  
    return (
        <div className='w-full m-auto'>
            <BarChart width={530} height={250} data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey={name} fill="#8884d8" />
                  <Bar dataKey={total} fill="#82ca9d" />
                </BarChart>
        </div>
    );
};

export default ChartDetail;