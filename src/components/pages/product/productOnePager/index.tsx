import { Button } from "@/components/UI/atoms";
import { onePager } from "@/assets";
import styles from "./ProductOnePager.module.css";

export const ProductOnePager: React.FunctionComponent = () => {
  return (
    <div className="row">
      <div className="col-xs-12 col-md-6">
        <div className="box">
          <div className="row">
            <div className="col-xs-2">
              <div className="box">
                <span className={styles.model}>E 10X</span>
              </div>
            </div>
            <div className="col-xs-10">
              <div className="box">
                <h1 className={styles.title}>One Pager</h1>
              </div>
            </div>
            <div className="col-xs-12">
              <div className="box">
                <img
                  src={onePager}
                  alt="Datos de modelo"
                  className={styles.onePagerImage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`col-xs-12 col-md-6 ${styles.buttonSeparator}`}>
        <div className="box">
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                <Button text="Descargar" func={() => { }} full={true} />
              </div>
            </div>
            <div className="col-xs-12">
              <div className="box">
                <Button text="Compartir" func={() => { }} full={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
