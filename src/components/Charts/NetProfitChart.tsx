import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const NetProfitChart: React.FC = () => {
    const percentage = 73;
    const data = [
        { name: 'Remaining', value: 100 - percentage },
        { name: 'Completed', value: percentage },
    ];

    const COLORS = ['#13274F', '#7294ff'];

    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="relative"> 
                <PieChart width={128} height={128}> 
                    <Pie
                        data={data}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        innerRadius={40} // Adjusted for smaller size
                        outerRadius={55}
                        startAngle={90}
                        endAngle={450}
                        cornerRadius={0}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))}
                    </Pie>
                </PieChart>
                {/* Centered Percentage */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-md text-black dark:text-white font-bold">{`${percentage}%`}</span>
                    <span className="text-gray-700 dark:text-gray-200 text-xs text-wrap w-1/2 text-center">Goal Completed</span>
                </div>
            </div>
            <div className="text-xs">
                *The values here has been rounded off.
            </div>
        </div>
    );
};

export default NetProfitChart;
