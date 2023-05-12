import { PieChart } from "../../atoms";
import { Label } from "./label";
import styles from "./PieChart.module.css";

export interface PieChartLabelProps {
	labels: string[];
	amounts: number[];
	percentages: number[];
}

export const PieChartLabel: React.FunctionComponent<PieChartLabelProps> = (
	props
) => {
	const colors = ["#0d9d00", "#8dbdec", "#eed347", "#e07d08", "#e9525d"];

	return (
		<div className="row">
			<div className={`col-xs-12 col-md-6 noPadding `}>
				<div className={`${styles.chartContainer}`}>
					<PieChart
						hideLabels={true}
						title="Ventas"
						colors={colors}
						labels={props.labels}
						data={props.amounts}
					/>
				</div>
			</div>
			<div className="col-xs-12 col-md-6 noPadding">
				{colors.map((color: string, index: number) => {
					return (
						<Label
							key={index}
							color={color}
							text={props.labels[index]}
							amount={props.amounts[index]}
							percentage={props.percentages[index]}
						/>
					);
				})}
			</div>
		</div>
	);
};
