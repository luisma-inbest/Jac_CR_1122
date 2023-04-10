import React, { useState, useRef, useEffect } from "react";
import styles from "./Tabs.module.css";

interface Props {}

export const Tabs = (props: any) => {
	const viewport_width = document.documentElement.clientWidth;
	const [tabs, setTabs] = useState<any[]>(props.tabs);
	const [activeTab, setActiveTab] = useState(0);
	const prueba = useRef<HTMLDivElement>(null);

	function toggleTab(tab: number) {
		// console.log("toggleTab" + tab);
		setActiveTab(tab);
		if (props.full) {
			prueba!.current!.style.left = `calc(25% * ${tab} )`;
		} else {
			if (viewport_width > 993) {
				console.log("3");
				prueba!.current!.style.left = `calc(calc(100% / 3) * ${
					tab - 1
				})`;
			} else if (viewport_width < 992) {
				console.log("4");
				prueba!.current!.style.left = `calc(25% * ${tab})`;
			}
		}
	}

	useEffect(() => {
		if (viewport_width > 993 && !props.full) {
			setActiveTab(1);
		}
	}, []);

	return (
		<>
			{/* tabs */}

			<div id="tabs" className={`${styles.tabs}`}>
				{/* Tabs Header  */}
				<div id="tabHeader" className={`${styles.tabHeader}`}>
					{tabs.map((tab, index) => {
						if (index == 0) {
							return (
								<p
									className={`p4 ${
										props.full
											? styles.tabOptionFull
											: styles.tabOption
									} ${props.full ? "" : styles.firstTab} ${
										activeTab == index ? styles.active : ""
									}`}
									key={index}
									onClick={() => toggleTab(index)}
								>
									{tab}
								</p>
							);
						} else {
							return (
								<p
									className={`p4 ${
										props.full
											? styles.tabOptionFull
											: styles.tabOption
									} ${
										activeTab == index ? styles.active : ""
									}`}
									key={index}
									onClick={() => toggleTab(index)}
								>
									{tab}
								</p>
							);
						}
					})}
				</div>
				{/* /Tabs Header  */}
				{/* Indicator */}
				<div
					id="tabIndicator"
					ref={prueba}
					className={`${
						props.full
							? styles.tabIndicatorFull
							: styles.tabIndicator
					} `}
				></div>
				{/* /Indicator */}
				{/* Tabs Body */}
				<div
					id="tabBody"
					className={`${styles.tabBody} ${
						props.filled ? styles.tabBodyFilled : ""
					}`}
				>
					{tabs.map((tab, index) => {
						return (
							<div
								key={index}
								className={` ${styles.tabContent} ${
									activeTab == index ? styles.active : ""
								}`}
							>
								{props.components[index]}
							</div>
						);
					})}
				</div>
				{/* /Tabs Body */}
			</div>
			{/* tabs */}
		</>
	);
};
