import React, { useState, useEffect } from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'
import * as d3 from 'd3-scale-chromatic'

const Reports = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/api/expenses/report') // Update w/ backend url
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error('Error fetching data', error))
    }, [])


const multipleColors = d3.interpolateRainbow

return (
    <div>
        {/* <h2 className='text-2xl font-bold mb-4'> Expense Report</h2> */}
        <PieChart width={400} height={400}>
            {/* Main Pie Chart */}
            <Pie
            data={data}
            dataKey="value"
            nameKey="category"
            cx="50%"
            cy="50%"
            outerRadius={150}
            // fill="#8884d8"
            label
            isAnimationActive={true} // enables animation to fade in smoothly when page loads
            animationDuration={800} // customize the animation speed
            >
            {/* Map through the data and assign colors dynamically */}
            {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={multipleColors(index /data.length)} />
            ))}
            </Pie>
            
            {/* Tooltip for detailed hover information */}
            <Tooltip 
                content={({ payload }) => {
                if (!payload || payload.length === 0) return null;
                return (
                <div style={{
                    backgroundColor: "#fff",
                    padding: "10px",
                    borderRadius: "8px",
                    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)"
                }}>
                    <p style={{ fontWeight: "bold", color: payload[0].payload.fill }}>
                    {payload[0].payload.category}: ${payload[0].value.toFixed(2)}
                    </p>
                </div>
                );
            }}  
            />
              
            {/* Legend to describe the categories */}
            <Legend />
        </PieChart>
    </div>
)
}



export default Reports;