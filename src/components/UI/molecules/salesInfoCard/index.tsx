import styles from "./SalesInfoCard.module.css";

interface SalesInfoCardProps {
	title: string;
	amount: string;
	percentage: string;
	dateRange: string;
}

export const SalesInfoCard: React.FunctionComponent<SalesInfoCardProps> = (
	props
) => {
	return (
		<div className={styles.card}>
			<div className="row">
				<div className="col">
					<div className="box">
						<h3 className={styles.title}>{props.title}</h3>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-xs-8">
					<div className="box">
						<span className={styles.amount}>{props.amount}</span>
					</div>
				</div>
				<div className="col-xs-4">
					<div className="box">
						<span className={styles.percentage}>
							{props.percentage}
						</span>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<div className="box">
						<span className={styles.dateRange}>
							{props.dateRange}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};
