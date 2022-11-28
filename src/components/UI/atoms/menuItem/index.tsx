import React from "react";
import {Link} from "react-router-dom";
import styles from "./MenuItem.module.css";
import {
	IconUser,
	IconSettings,
	IconHR,
	IconMarketing,
	IconProduct,
	IconSells,
	IconSupport,
	IconArrow,
} from "@/assets";

interface Props {
	icon: string;
	text: string;
	route: string;
	state: string;
	func: any;
	submenu: boolean;
	dropped: boolean;
}

export const MenuItem = (props: Props) => {
	const [colorIcon, setColorIcon] = React.useState("#000");
	const [whiteColor, setWhiteColor] = React.useState("#fff");
	var state = props.state === "active" ? true : false;

	const iconSelector = (text: string) => {
		switch (text) {
			case "profile":
				return (
					<IconUser
						color={props.dropped ? whiteColor : colorIcon}
						size="100%"
					/>
				);
			case "sells":
				return (
					<IconSells
						color={props.dropped ? whiteColor : colorIcon}
						size="100%"
					/>
				);
			case "support":
				return (
					<IconSupport
						color={props.dropped ? whiteColor : colorIcon}
						size="100%"
					/>
				);
			case "marketing":
				return (
					<IconMarketing
						color={props.dropped ? whiteColor : colorIcon}
						size="100%"
					/>
				);
			case "product":
				return (
					<IconProduct
						color={props.dropped ? whiteColor : colorIcon}
						size="100%"
					/>
				);
			case "hr":
				return (
					<IconHR color={props.dropped ? whiteColor : colorIcon} size="100%" />
				);
			case "settings":
				return (
					<IconSettings
						color={props.dropped ? whiteColor : colorIcon}
						size="100%"
					/>
				);
		}
	};

	return (
		<div
			className={`${styles.menuItemContainer} ${
				props.dropped ? styles.selected : styles.p
			} `}
			onClick={props.func}
		>
			<div className={`${styles.menuLeft} row`}>
				<div className={`${styles.iconContainer}`}>
					{iconSelector(props.icon)}
				</div>
				<p className={`p2 bold blue2 no-margin`}>{props.text}</p>
			</div>
			<div className={`${styles.menuRight} ${styles.iconContainer}`}>
				{props.submenu ? (
					<div
						className={`${styles.iconContainer} ${
							props.dropped ? styles.rotate : styles.normal
						}`}
					>
						<IconArrow
							color={props.dropped ? whiteColor : colorIcon}
							size="100%"
							rotate="0"
						/>
					</div>
				) : (
					<></>
				)}
			</div>
		</div>
	);
};
