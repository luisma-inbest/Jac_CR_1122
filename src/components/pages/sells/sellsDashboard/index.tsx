import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import {
	BarChart,
	CardProduct,
	ComparativeBarChart,
	FilterButton,
} from "@/components/UI/atoms";
import {
	PieChartLabel,
	SalesInfoCard,
	StackedBarChartLabel,
} from "@/components/UI/molecules";
import { Tabs } from "@/components/templates";
import styles from "./SellsDashboard.module.css";
import { IconSearch, IconSells } from "@/assets";
import Card1 from "./cards/card1";
import Card2 from "./cards/card2";
import Card4 from "./cards/card4";
import Card3 from "./cards/card3";
import { reducer, initial } from "./reducer";
import { FilterWindow } from "./filterWindow";

const getTitleElement = (titleText: string) => {
	return (
		<div className={`${styles.titleContainer}`}>
			<div className={styles.iconContainer}>
				<IconSells size="100%" color="#000" />
			</div>
			<h2 className={styles.title}>{titleText}</h2>
		</div>
	);
};

export const SellsDashboard = () => {
	const [fields, dispatch] = useReducer(reducer, initial);
	const [filterWindow, setFilterWindow] = useState(false);
	const secondaryColor = getComputedStyle(document.body).getPropertyValue(
		"--secondary-text"
	);

	return (
		<>
			<div className={`row mb-2`}>
				<div className={`col-xs-12 ${styles.filtersContainer}`}>
					<div className={styles.searchContainer}>
						{/* <input
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
							className={styles.iconContainer}
							onClick={() =>
								dispatch({
									type: "refresh",
									value: !fields.refresh,
								})
							}
						>
							<IconSearch color={secondaryColor} size="100%" />
						</div> */}
					</div>
					<FilterButton func={() => setFilterWindow(true)} />
				</div>
			</div>

			<div className={`contentVerticalPadding ${styles.mainContainer}`}>
				{/* col */}
				<div className={` ${styles.cardContainer} ${styles.card1}`}>
					<div className={`globalPadding ${styles.card} `}>
						<Card1 fields={fields} />
					</div>
				</div>

				{/* col */}
				<div
					className={` ${styles.cardContainer} ${styles.sideBar} ${styles.card2}`}
				>
					<div className={`globalPadding ${styles.card}`}>
						<Card2 fields={fields} />
					</div>
				</div>

				{/* col */}
				<div className={` ${styles.cardContainer} ${styles.card3}`}>
					<div className={`globalPadding ${styles.card}`}>
						<Card3 fields={fields} />
					</div>
				</div>

				{/* col */}
				<div className={` ${styles.cardContainer} ${styles.card4}`}>
					<div className={`globalPadding ${styles.card}`}>
						<Card4 fields={fields} />
					</div>
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
		</>
	);
};
