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

	const { isLoading, data, isError, error } = useQuery({
		queryKey: ["agencies"],
		queryFn: LeadAPI.getAll,
		staleTime: 5 * (60 * 1000), // 5 mins
		cacheTime: 10 * (60 * 1000), // 10 mins
	});

	const PageTabs = ["Subasta", "Contacto", "Seguimiento", "Cierre"];
	const TabOne = <LeadsTable type={3} />;
	const TabTwo = <LeadsTable type={0} />;
	const TabThree = <LeadsTable type={1} />;
	const TabFour = <LeadsTable type={2} />;
	const TabsComponents = [TabOne, TabTwo, TabThree, TabFour];

	const windowHandler = () => {
		if (!leadView) {
			window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
		}
		setLeadView(!leadView);
	};

	if (isLoading) {
		return (
			<div className="row">
				<div className={`col-xs-12 loaderContainer`}>
					<Loader />
				</div>
			</div>
		);
	}

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

			{leadView ? <CreateLead func={windowHandler} /> : <></>}
		</div>
	);
};
