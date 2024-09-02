import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import styles from "./DonutChart.module.css";

const DonutChart = () => {
    const chartRef = useRef(null);

    const updateChart = () => {
        const screenWidth = window.innerWidth;

        const width = 800,
            height = 450,
            margin = 40;

        const radius = Math.min(width, height) / 2 - margin;

        const svg = d3
            .select(chartRef.current)
            .html("") // Clear previous SVG
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", `translate(${width / 2},${height / 2})`);

        const data = {
            Wordpress: 9,
            "Mobile Apps": 20,
            "Web Apps": 30,
            "Data Science & Analysis": 8,
            "Game Development": 12,
            "Research & Development": 3,
            Consulting: 7,
            "Backend & APIs": 14,
        };

        const color = d3
            .scaleOrdinal()
            .domain(Object.keys(data))
            .range(d3.schemeDark2);

        const pie = d3
            .pie()
            .sort(null)
            .value((d) => d[1]);
        const data_ready = pie(Object.entries(data));

        const arc = d3
            .arc()
            .innerRadius(radius * 0.5)
            .outerRadius(radius * 0.8);
        const outerArc = d3
            .arc()
            .innerRadius(radius * 0.9)
            .outerRadius(radius * 0.9);

        svg.selectAll("allSlices")
            .data(data_ready)
            .join("path")
            .attr("d", arc)
            .attr("fill", (d) => color(d.data[0]))
            .attr("stroke", "white")
            .style("stroke-width", "2px")
            .style("opacity", 0.7);

        if (screenWidth > width) {
            svg.selectAll("allPolylines")
                .data(data_ready)
                .join("polyline")
                .attr("stroke", "black")
                .style("fill", "none")
                .attr("stroke-width", 1)
                .attr("points", function (d) {
                    const posA = arc.centroid(d);
                    const posB = outerArc.centroid(d);
                    const posC = outerArc.centroid(d);
                    const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
                    posC[0] = radius * 0.95 * (midangle < Math.PI ? 1 : -1);
                    return [posA, posB, posC];
                });

            svg.selectAll("allLabels")
                .data(data_ready)
                .join("text")
                .text((d) => d.data[0])
                .attr("transform", function (d) {
                    const pos = outerArc.centroid(d);
                    const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
                    pos[0] = radius * 0.99 * (midangle < Math.PI ? 1 : -1);
                    return `translate(${pos})`;
                })
                .style("text-anchor", function (d) {
                    const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
                    return midangle < Math.PI ? "start" : "end";
                });
        } else {
            svg.selectAll("allLabels")
                .data(data_ready)
                .join("text")
                .text((d) => d.data[0])
                .attr("transform", function (d) {
                    const pos = arc.centroid(d);
                    return `translate(${pos})`;
                })
                .style("text-anchor", "middle");
        }

        // Add title at the middle-bottom of the chart
        svg.append("text")
            .attr("x", 0) // center the text
            .attr("y", radius + margin / 2) // position it at the middle-bottom
            .attr("text-anchor", "middle") // ensure the text is centered at the given x,y position
            .style("font-size", "16px")
            .style("font-weight", "bold")
            .text("Technology Domains");
    };

    useEffect(() => {
        window.addEventListener("resize", updateChart);
        updateChart();

        return () => {
            window.removeEventListener("resize", updateChart);
        };
    }, []);

    return <div ref={chartRef} className={styles.chartContainer}></div>;
};

export default DonutChart;
