import React, {useState} from "react";
import {Chart} from "react-chartjs-2";
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

import {UserData} from "./DataPie";

interface PieChartProps {
	hideLabels?: boolean;
}

export const PieChart: React.FunctionComponent<PieChartProps> = (props) => {
	const labels = props.hideLabels
		? []
		: UserData.map((data) => data.year);

	const [chartData, setChartData] = useState({
		labels: labels,
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
			},
		],
	});
	return <Chart type="doughnut" data={chartData} />;
};
