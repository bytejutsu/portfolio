"use client";

import React from 'react';
//import CanvasJSReact from '@canvasjs/react-charts';
import dynamic from "next/dynamic";
// var CanvasJSReact = require('@canvasjs/react-charts');

//const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const CanvasJSChart = dynamic(() => import('@canvasjs/react-charts').then((mod) => mod.CanvasJSChart), { ssr: false });


const PieChart = () => {
    const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "dark2", // "light1", "dark1", "dark2"
        title: {
            text: "Trip Expenses"
        },
        data: [{
            type: "pie",
            indexLabel: "{label}: {y}%",
            startAngle: -90,
            dataPoints: [
                { y: 20, label: "Airfare" },
                { y: 24, label: "Food & Drinks" },
                { y: 20, label: "Accommodation" },
                { y: 14, label: "Transportation" },
                { y: 12, label: "Activities" },
                { y: 10, label: "Misc" }
            ]
        }]
    };

    return (
        <div>
            <CanvasJSChart options={options} />
            {/* If needed, you can use a ref here to access the chart instance */}
        </div>
    );
};

export default PieChart;
