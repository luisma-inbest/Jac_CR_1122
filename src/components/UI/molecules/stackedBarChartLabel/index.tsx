import { StackedBarChart } from "@/components/UI/atoms";
import { Label } from "./label";
import styles from "./StackedBarChartLabel.module.css";

interface StackedBarChartLabelProps {
	title: string;
	models: string[];
	amounts: number[];
	percentages: number[];
}

export const StackedBarChartLabel: React.FunctionComponent<
	StackedBarChartLabelProps
> = (props) => {
	return (
		<div className="row mb-3">
			<div className="col-xs-12">
				<h3 className={`${styles.title} noMargin`}>{props.title}</h3>
			</div>
			{props.models.map((model, index) => {
				return (
					<div className="col-xs-3" key={index}>
						<Label
							model={model}
							amount={props.amounts[index]}
							percentage={props.percentages[index]}
						/>
					</div>
				);
			})}
			<div className="col-xs-12">
				<StackedBarChart data={props.amounts} />
			</div>
		</div>
	);
};
