import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Sells.module.css";
import { StyledInputText, Button, Loader } from "@/components/UI/atoms";
import { LeadsTable } from "@/components/UI/organisms";
import { LeadData } from "@/components/UI/molecules";
import { CreateLead } from "@/components/pages";
import { Tabs } from "@/components/templates";
import { useQuery } from "react-query";
import { LeadAPI } from "@/apis";

export const Leads = () => {
	const [leadView, setLeadView] = useState(false);
	const [refresh, setRefresh] = useState(false);

	const PageTabs = ["Subasta", "1er Contacto", "Seguimiento", "Cierre"];
	const TabOne = <LeadsTable type={0} refresh={refresh} />;
	const TabTwo = <LeadsTable type={1} />;
	const TabThree = <LeadsTable type={2} />;
	const TabFour = <LeadsTable type={3} />;
	const TabsComponents = [TabOne, TabTwo, TabThree, TabFour];

	const windowHandler = () => {
		if (!leadView) {
			window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
		}
		setLeadView(!leadView);
	};

	return (
		<div className={`contentVerticalPadding ${styles.mainContainer}`}>
			<div className="row">
				<div className={`col-xs-12`}>
					<Tabs
						tabs={PageTabs}
						components={TabsComponents}
						one={LeadData}
						full={true}
					/>
					<div className={styles.buttonContainer}>
						<Button
							text="Agregar nuevo lead"
							func={windowHandler}
							full={true}
						/>
					</div>
				</div>
			</div>

			{leadView ? (
				<CreateLead
					func={windowHandler}
					refreshFunc={setRefresh}
					refresh={refresh}
				/>
			) : (
				<></>
			)}
		</div>
	);
};
