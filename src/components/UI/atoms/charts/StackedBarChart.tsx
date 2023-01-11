import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);

interface StackedBarChartProps {
    data: number[];
}

export const StackedBarChart: React.FunctionComponent<StackedBarChartProps> = (props) => {
    const chartHeight = 40;
    const colors = [
        '#bebfc6',
        '#93959d',
        '#494e5c',
        '#eeeeee',
    ];
    const datasets = props.data.map((value, index) => ({
        data: [value],
        backgroundColor: colors[index],
        barThickness: chartHeight,
        borderRadius: 20,
        borderSkipped: false,
    }));
    const data = {
        labels: [''],
        datasets: datasets,
    };

    const options: any = {
        indexAxis: 'y',
        plugins: {
            legend: false,
        },
        scales: {
            y: {
                stacked: true,
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
                // stacked: true,
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
        },
        maintainAspectRatio: false,
    };

    const style: React.CSSProperties = {
        position: 'relative',
        margin: 'auto',
        height: `${chartHeight}px`,
    };

    return (
        <div style={style}>
            <Bar data={data} options={options} />
        </div>
    );
};
