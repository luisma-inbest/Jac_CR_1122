import styles from "./PieChart.module.css";

interface LabelProps {
	color: string;
	text: string;
	amount: number;
	percentage: number;
}

export const Label: React.FunctionComponent<LabelProps> = (props) => {
	const style = {
		backgroundColor: props.color,
	};

	return (
		<div className={`${styles.labelContainer}`}>
			<div className={`${styles.labelHeader}`}>
				<div className={styles.square} style={style}></div>
				<p className={`p3 secondary2 noMargin`}>{props.text}</p>
			</div>
			<div className={`${styles.labelNumbers}`}>
				<h4 className={`bold noMargin`}>{props.amount}</h4>
				<h5 className={`bold highlight2 noMargin`}>
					{props.percentage}%
				</h5>
			</div>
		</div>
	);
};
