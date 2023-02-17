import styles from "./AgencySocial.module.css";

interface AgencySocialProps {
	agencySocialMedia: {
		name: string;
		url: string;
	}[]
}

export const AgencySocial: React.FunctionComponent<AgencySocialProps> = (props) => {
	const tableRows = props.agencySocialMedia.map((socialMedia) => {
		return (
			<tr>
				<td className="bold">{socialMedia.name}</td>
				<td>{socialMedia.url}</td>
			</tr>
		);
	});

	return (
		<>
			<div className="row">
				<div className="col-xs-12">
					<div className="box content-side">
						<h2>Redes Sociales</h2>
					</div>
				</div>
				<div className="col-xs-12">
					<div className="box content-side">
						<table className={`${styles.table}`}>
							<thead>
								<tr>
									<th className="p4 highlight">Red Social</th>
									<th className="p4 highlight">URL</th>
								</tr>
							</thead>
							<tbody>
								{tableRows}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
};
