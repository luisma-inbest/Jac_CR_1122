import styles from "./StackedBarChartLabel.module.css";

interface LabelProps {
	model: string;
	amount: number;
	percentage: number;
}

export const Label: React.FunctionComponent<LabelProps> = (props) => {
	return (
		<div className="row">
			<div className="col-xs-12">
				<span className={styles.model}>{props.model}</span>
			</div>
			<div className="col-xs-6">
				<span className={styles.amount}>{props.amount}</span>
			</div>
			<div className="col-xs-6">
				<span className={styles.percentage}>{props.percentage}%</span>
			</div>
		</div>
	);
};
