'use client'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ChartRating = ({ expectedApp }) => {
  // 1. Get the ratings array and reverse it so "5 star" shows up at the top
  const ratingsData = expectedApp?.ratings ? [...expectedApp.ratings].reverse() : [];
    // const ratingsData = expectedApp.ratings ? [...expectedApp.ratings].reverse() : [];

  return (
    // ResponsiveContainer ensures the chart fills the parent div properly
    <div style={{ width: '100%', height: '300px' }}>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          layout="vertical" // 2. This flips the chart horizontally
          data={ratingsData}
          margin={{ top: 0, right: 30, left: 0, bottom: 0 }}
        >
          {/* horizontal={false} removes the horizontal grid lines to match your design */}
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          
          {/* 3. XAxis handles the numbers, YAxis handles the categories */}
          <XAxis type="number" hide={false} axisLine={false} tickLine={false} />
          <YAxis 
            type="category" 
            dataKey="name" 
            width={70} 
            axisLine={false} 
            tickLine={false} 
          />
          
          <Tooltip cursor={{ fill: '#f5f5f5' }} />
          
          {/* 4. Match the orange color and only round the right-side corners */}
          <Bar 
            dataKey="count" 
            fill="#ff8a00" 
            barSize={20} 
            radius={[0, 4, 4, 0]} 
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartRating;