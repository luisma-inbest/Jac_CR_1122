import React, { useState } from "react";
import { Chart } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler,
	ArcElement,
} from "chart.js";
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler,
	ArcElement
);

interface PieChartProps {
	hideLabels?: boolean;
	title: string;
	colors: string[];
	labels: string[];
	data: number[];
}

export const PieChart: React.FunctionComponent<PieChartProps> = (props) => {
	const labels = props.hideLabels ? [] : props.labels;

	const [chartData, setChartData] = useState({
		labels: labels,
		datasets: [
			{
				label: "Leads",
				data: props.data,
				hoverOffset: 10,
				backgroundColor: props.colors,
				borderColor: "white",
				borderWidth: 2,
			},
		],
	});
	return <Chart type="doughnut" data={chartData} />;
};
