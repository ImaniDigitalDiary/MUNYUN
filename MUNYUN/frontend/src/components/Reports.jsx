import React, { useState, useEffect } from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'

const Reports = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/api/expenses/report') // Update w/ backend url
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error('Error fetching data', error))
    }, [])


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

return (
    <div>
        <h2 className='text-2xl font-bold mb-4'> Expense Report</h2>
        <PieChart width={400} height={400}>
            {/* Main Pie Chart */}
            <Pie
            data={data}
            dataKey="value"
            nameKey="category"
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            label
            >
            {/* Map through the data and assign colors dynamically */}
            {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            </Pie>
            
            {/* Tooltip for detailed hover information */}
            <Tooltip />
            
            {/* Legend to describe the categories */}
            <Legend />
        </PieChart>
    </div>
)
}



export default Reports;