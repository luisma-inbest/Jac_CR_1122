import { IconArrow } from "@/assets";
import {DateFormat, DateFormatType} from "@/components/UI/atoms";
import styles from "./CardChat.module.css";

interface Props {
    message: string;
    sentDate: Date;
};

export const CardChat = (props: Props) => {
    return (
        <div className="row center-xs">
            <div className="col-xs-9">
                <div className={`box ${styles.cardChat}`}>
                    <div className="row start-xs">
                        <div className="col-xs">
                            <div className="box">
                                {props.message}
                            </div>
                        </div>
                    </div>
                    <div className="row end-xs">
                        <div className="col-xs">
                            <div className="box">
                                <DateFormat
                                    formatType={DateFormatType.TIME_ONLY}
                                    date = {props.sentDate}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
