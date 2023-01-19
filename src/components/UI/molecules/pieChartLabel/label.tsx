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

    return <div className="row">
        <div className="col-xs-2">
            <div className="box">
                <div
                    className={styles.square}
                    style={style}
                ></div>
            </div>
        </div>
        <div className="col-xs-10">
            <div className={`box ${styles.labelInfo}`}>
                <div className="row">
                    <div className="col-xs-12">
                        <div className="box">
                            <span className={styles.text}>{props.text}</span>
                        </div>
                    </div>
                    <div className="col-xs-5">
                        <div className="box">
                            <span className={styles.amount}>{props.amount}</span>
                        </div>
                    </div>
                    <div className="col-xs-7">
                        <div className="box">
                            <span className={styles.percentage}>{props.percentage}%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};
