import {IconArrow} from "@/assets";

import styles from "./CardChat.module.css";

interface Props {
	type: string;
    comments?: string;
};

const getComments = (comments?: string) => {
    if (!comments) {
        return <></>;
    }

    return <div className={styles.comments}>
        <span>Comentarios</span>
        <p>{comments}</p>
    </div>;
};

export const CardChat = (props: Props) => {
    const comments = getComments(props.comments);

	return (
		<div className={styles.card}>
            <div className="row">
                <span className="col-xs-6">Estado</span>
                
            </div>
            {comments}
		</div>
	);
};
