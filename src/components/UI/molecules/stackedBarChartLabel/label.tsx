interface LabelProps {
    amount: number;
}

export const Label: React.FunctionComponent<LabelProps> = (props) => {
    return (
        <div className="row">
            <div className="col-xs-12">
                <div className="box">
                    <span>Modelo</span>
                </div>
            </div>
            <div className="col-xs-6">
                <div className="box">
                    <span>{props.amount}</span>
                </div>
            </div>
            <div className="col-xs-6">
                <div className="box">
                    <span>10%</span>
                </div>
            </div>
        </div>
    );
};
