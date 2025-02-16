import React, { useState } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
} from 'recharts';

const ActivityChart: React.FC = () => {
    const [filter, setFilter] = useState<'weekly' | 'monthly'>('weekly');

    // Generate data based on the filter
    const generateData = (filter: 'weekly' | 'monthly') => {
        if (filter === 'weekly') {
            return [
                { date: 1, value: 2000 },
                { date: 3, value: 5000 },
                { date: 5, value: 10000 },
                { date: 7, value: 15000 },
                { date: 9, value: 2000 },
                { date: 11, value: 5000 },
                { date: 13, value: 2000 },
                { date: 15, value: 4000 },
                { date: 17, value: 10000 },
                { date: 19, value: 15000 },
                { date: 21, value: 4000 },
                { date: 23, value: 3000 },
                { date: 25, value: 1200 },
                { date: 27, value: 8000 },
            ];
        } else {
            return [
                { date: 1, value: 3000 },
                { date: 5, value: 6000 },
                { date: 10, value: 10000 },
                { date: 15, value: 12000 },
                { date: 20, value: 8000 },
                { date: 25, value: 10000 },
            ];
        }
    };

    const data = generateData(filter);

    return (
        <div className='w-full'>
            <div className="flex justify-between px-5 py-3">
                <h2 className='text-black dark:text-white pb-4 text-2xl font-bold'>
                    Activity Chart
                </h2>
                <div className="filter">
                    <select
                        className='bg-white dark:bg-gray-600 rounded-xl px-3 py-1 text-black dark:text-white border dark:border-0'
                        onChange={(e) => setFilter(e.target.value as 'weekly' | 'monthly')} value={filter}>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                    </select>
                </div>
            </div>

            <ResponsiveContainer width="100%" height={200}>
                <BarChart data={data}>
                    <XAxis dataKey="date" />
                    <YAxis tickFormatter={(value) => `${value / 1000}k`} />
                    {/* <Tooltip /> */}
                    {/* <Legend /> */}
                    <Bar dataKey="value" fill="#7294ff" barSize={20}   radius={[30, 30, 30, 30]}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ActivityChart;
