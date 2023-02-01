import { StackedBarChart } from "@/components/UI/atoms";
import { Label } from "./label";
import styles from "./StackedBarChartLabel.module.css";

interface StackedBarChartLabelProps {
    title: string;
    data: [number, number, number, number];
}

export const StackedBarChartLabel: React.FunctionComponent<StackedBarChartLabelProps> = (props) => {
    return (
        <div className="row">
            <div className="col-xs-12">
                <div className="box">
                    <h3 className={styles.title}>{props.title}</h3>
                </div>
            </div>
            {
                props.data.map((amount, index) => {
                    return (
                        <div className="col-xs-3" key={index}>
                            <div className="box">
                                <Label
                                    amount={amount}
                                />
                            </div>
                        </div>
                    );
                })
            }
            <div className="col-xs-12">
                <div className="box">
                    <StackedBarChart data={props.data} />
                </div>
            </div>
        </div>
    );
};
