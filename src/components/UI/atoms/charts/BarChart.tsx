import React, {useContext, useState} from "react";

import {Chart, Bar} from "react-chartjs-2";
import {Chart as ChartJS, registerables} from "chart.js";
import * as chartjs from "chart.js";
ChartJS.register(...registerables);

import {UserData} from "./Data";

interface Props {
	axis: string;
}

export const BarChart = (props: Props) => {
	const axis = props.axis;
	const [chartData, setChartData] = useState({
		labels: UserData.map((data) => data.year),
		datasets: [
			{
				label: "Users Gained",
				data: UserData.map((data) => data.userGain),
				backgroundColor: [
					"rgba(75,192,192,1)",
					"#ecf0f1",
					"#50AF95",
					"#f3ba2f",
					"#2a71d0",
				],
				borderColor: "white",
				borderWidth: 2,
				borderRadius: 5,
			},
		],
	});

	const options: chartjs.ChartOptions = {
		maintainAspectRatio: false,
		indexAxis: axis,
		interaction: {
			mode: "index",
			intersect: false,
			axis: axis,
		},
		plugins: {
			tooltip: {
				enabled: true,
			},
			legend: false,
		},
		scales: {
			y: {
				grid: {
					drawOnChartArea: false,
					drawBorder: false,
				},
				ticks: {
					color: "#929292",
				},
			},
			x: {
				grid: {
					color: "#dddfe5",
					drawBorder: false,
					borderDash: [6],
					border: false,
				},
				ticks: {
					font: {
						family: "'Mulish', sans-serif",
						size: "16px",
					},
					color: "#929292",
				},
			},
		},
	};

	return <Bar data={chartData} options={options} />;
};
