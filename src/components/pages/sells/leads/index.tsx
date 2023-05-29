import React, { useReducer, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Sells.module.css";
import {
	StyledInputText,
	Button,
	Loader,
	FilterButton,
} from "@/components/UI/atoms";
import { LeadsTable } from "@/components/UI/organisms";
import { LeadData } from "@/components/UI/molecules";
import { CreateLead } from "@/components/pages";
import { Tabs } from "@/components/templates";
import { useQuery } from "react-query";
import { LeadAPI } from "@/apis";
import { FilterWindow } from "./filterWindow";
import { IconSearch } from "@/assets";
import { reducer, initial } from "./reducer";

export const Leads = () => {
	const [leadView, setLeadView] = useState(false);
	const [filterWindow, setFilterWindow] = useState(false);
	const secondaryColor = getComputedStyle(document.body).getPropertyValue(
		"--secondary-text"
	);
	const [fields, dispatch] = useReducer(reducer, initial);

	const PageTabs = ["Subasta", "1er Contacto", "Seguimiento", "Cierre"];
	const TabOne = <LeadsTable type={0} data={fields} dispatch={dispatch} />;
	const TabTwo = <LeadsTable type={1} data={fields} dispatch={dispatch} />;
	const TabThree = <LeadsTable type={2} data={fields} dispatch={dispatch} />;
	const TabFour = <LeadsTable type={3} data={fields} dispatch={dispatch} />;
	const TabsComponents = [TabOne, TabTwo, TabThree, TabFour];

	const windowHandler = () => {
		if (!leadView) {
			window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
		}
		setLeadView(!leadView);
	};

	return (
		<div className={`contentVerticalPadding ${styles.mainContainer}`}>
			<div className={`row mb-2`}>
				<div className={`col-xs-12 ${styles.filtersContainer}`}>
					<div className={styles.searchContainer}>
						<input
							type="text"
							placeholder="Buscar"
							value={fields.search}
							onChange={(e) => {
								dispatch({
									type: "search",
									value: e.target.value,
								});
							}}
						/>
						<div
							className="iconContainer"
							onClick={() =>
								dispatch({
									type: "refresh",
									value: !fields.refresh,
								})
							}
						>
							<IconSearch color={secondaryColor} size="100%" />
						</div>
					</div>
					<FilterButton func={() => setFilterWindow(true)} />
				</div>
			</div>
			<div className={`row mb-1`}>
				<div className="col-xs-12">
					<div className={styles.buttonContainer}>
						<Button
							text="Agregar nuevo lead"
							func={windowHandler}
							full={true}
						/>
					</div>
				</div>
			</div>
			<div className="row">
				<div className={`col-xs-12`}>
					<Tabs
						tabs={PageTabs}
						components={TabsComponents}
						one={LeadData}
						full={true}
					/>
				</div>
			</div>

			{filterWindow ? (
				<FilterWindow
					func={() => setFilterWindow(!filterWindow)}
					fields={fields}
					dispatch={dispatch}
				/>
			) : (
				<></>
			)}

			{leadView ? (
				<CreateLead
					func={windowHandler}
					refreshFunc={() => {
						dispatch({ type: "refresh", value: !fields.refresh });
					}}
					refresh={fields.refresh}
				/>
			) : (
				<></>
			)}
		</div>
	);
};
