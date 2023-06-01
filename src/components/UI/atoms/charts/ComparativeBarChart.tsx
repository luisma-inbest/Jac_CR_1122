import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);

interface ComparativeBarChartProps {
	labels: string[];
	data1: number[];
	data2: number[];
}

export const ComparativeBarChart: React.FunctionComponent<
	ComparativeBarChartProps
> = (props) => {
	const data = {
		labels: props.labels,
		datasets: [
			{
				data: props.data1,
				backgroundColor: ["#eeeeee"],
				borderRadius: 20,
				borderWidth: 0,
				borderSkipped: false,
			},
			{
				data: props.data2,
				backgroundColor: ["#4a4e5c"],
				borderRadius: 20,
				borderWidth: 0,
				borderSkipped: false,
			},
		],
	};

	const options: any = {
		plugins: {
			legend: false,
		},
		scales: {
			y: {
				border: {
					display: false,
				},
				grid: {
					display: false,
				},
				ticks: {
					display: false,
				},
			},
			x: {
				border: {
					display: false,
				},
				grid: {
					display: false,
				},
				ticks: {
					font: {
						family: "Monserrat",
						size: "15px",
						weight: 900,
					},
					color: "#747474",
				},
			},
		},
	};

	return <Bar data={data} options={options} />;
};
