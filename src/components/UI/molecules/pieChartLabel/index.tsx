import { PieChart } from "../../atoms";
import { Label } from "./label";
import styles from "./PieChart.module.css";

export interface PieChartLabelProps {
    labels: [string, string, string, string];
    amounts: [number, number, number, number];
}

const calculatePercentage = (amounts: number[], indexToCalculate: number) => {
    const sum = amounts.reduce((acc, cur) => acc + cur, 0);
    const percentage = (amounts[indexToCalculate] / sum) * 100;

    return Math.round(percentage);
};

export const PieChartLabel: React.FunctionComponent<PieChartLabelProps> = (props) => {
    const colors = [
        '#8dbdec',
        '#eed347',
        '#e07d08',
        '#e9525d',
    ];

    return <div className="row">
        <div className="col-xs-12 col-md-6">
            <div className="box">
                <PieChart
                    hideLabels={true}
                    title="Ventas"
                    colors={colors}
                    labels={props.labels}
                    data={props.amounts}
                />
            </div>
        </div>
        <div className="col-xs-12 col-md-6">
            <div className={`box ${styles.labels}`}>
                <div className="row">
                    <div className="col-xs-6 col-md-12">
                        <div className="box">
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="box">
                                        <Label
                                            color={colors[0]}
                                            text={props.labels[0]}
                                            amount={props.amounts[0]}
                                            percentage={calculatePercentage(props.amounts, 0)}
                                        />
                                    </div>
                                </div>
                                <div className="col-xs-12">
                                    <div className="box">
                                        <Label
                                            color={colors[1]}
                                            text={props.labels[1]}
                                            amount={props.amounts[1]}
                                            percentage={calculatePercentage(props.amounts, 1)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-6 col-md-12">
                        <div className="box">
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="box">
                                        <Label
                                            color={colors[2]}
                                            text={props.labels[2]}
                                            amount={props.amounts[2]}
                                            percentage={calculatePercentage(props.amounts, 2)}
                                        />
                                    </div>
                                </div>
                                <div className="col-xs-12">
                                    <div className="box">
                                        <Label
                                            color={colors[3]}
                                            text={props.labels[3]}
                                            amount={props.amounts[3]}
                                            percentage={calculatePercentage(props.amounts, 3)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};
