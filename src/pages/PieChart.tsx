import { ArcElement, Chart, Legend, PieController, Tooltip } from "chart.js";
import { useEffect, useRef } from "react";

// registra i componenti necessari per il pie chart
Chart.register(PieController, ArcElement, Tooltip, Legend);

export const pieData = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
];

export function PieChart() {
    const chartRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        chartRef.current = new Chart(canvasRef.current, {
            type: 'pie',
            data: {
                labels: pieData.map(row => row.year),
                datasets: [
                    {
                        label: 'Acquisitions by year',
                        data: pieData.map(row => row.count),
                        backgroundColor: [
                            '#FF6384', '#36A2EB', '#FFCE56',
                            '#4BC0C0', '#9966FF', '#FF9F40', '#00C49F'
                        ]
                    }
                ]
            }
        });

        return () => chartRef.current?.destroy();
    }, []);

    return (
        <div className="chart-container">
            <canvas ref={canvasRef} /> 
        </div>
    );
}