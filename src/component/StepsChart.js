import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

export default function StepsChart ({tableData}) {

   const passedCount=tableData.reduce((acc,item)=>{
        return acc+item.steps.passed
    },0)
    const failedCount=tableData.reduce((acc,item)=>{
        return  acc+item.steps.failed
    },0)
    const skippedCount=tableData.reduce((acc,item)=>{
        return  acc+item.steps.skipped
    },0)
   

const data = [
    { name: 'passed', value: passedCount },
    { name: 'failed', value: failedCount },
    { name: 'skipped', value: skippedCount },
  ];
  
  const COLORS = ['#00B100', '#FF2E24','#88AAFF' ];

    return (
      <ResponsiveContainer width="100%" height={180}>
        
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }

