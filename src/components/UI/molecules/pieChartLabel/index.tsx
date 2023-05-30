import { PieChart } from "../../atoms";
import { Label } from "./label";
import styles from "./PieChart.module.css";

export interface PieChartLabelProps {
	labels: string[];
	amounts: number[];
	percentages: number[];
	colors: string[];
}

export const PieChartLabel: React.FunctionComponent<PieChartLabelProps> = (
	props
) => {
	return (
		<div className="row">
			<div className={`col-xs-12 col-md-7 noPadding `}>
				<div className={`${styles.chartContainer}`}>
					<PieChart
						hideLabels={true}
						title="Ventas"
						colors={props.colors}
						labels={props.labels}
						data={props.amounts}
					/>
				</div>
			</div>
			<div className="col-xs-12 col-md-5 noPadding">
				{props.colors.map((color: string, index: number) => {
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
