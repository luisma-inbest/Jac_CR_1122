import { PieChart } from "../../atoms";

export const PieChartLabel: React.FunctionComponent = () => {
    return <div className="row">
        <div className="col-xs-12 col-md-6">
            <div className="box">
                <PieChart
                    hideLabels={true}
                />
            </div>
        </div>
        <div className="col-xs-12 col-md-6">
            <div className="box">
                <div className="row">
                    <div className="col-xs-6 col-md-12">
                        <div className="box">
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="box">azul</div>
                                </div>
                                <div className="col-xs-12">
                                    <div className="box">amarillo</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-6 col-md-12">
                        <div className="box">
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="box">naranja</div>
                                </div>
                                <div className="col-xs-12">
                                    <div className="box">rojo</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};
