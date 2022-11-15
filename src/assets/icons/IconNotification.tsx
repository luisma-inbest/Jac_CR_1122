import React from "react";

interface Props {
	color: string;
	size: number;
}

export const IconNotification = (props: Props) => {
	return (
		<svg
			style={{width: `${props.size}`, height: `${props.size}`}}
			viewBox="0 0 18 22"
			fill="none"
		>
			<path
				d="M0 18.7v-2.2h2.2V8.8c0-1.522.458-2.874 1.375-4.057.917-1.182 2.108-1.956 3.575-2.323v-.77c0-.458.16-.848.482-1.168C7.952.16 8.342 0 8.8 0c.458 0 .848.16 1.168.482.321.32.482.71.482 1.168v.77c1.467.367 2.658 1.141 3.575 2.323C14.942 5.926 15.4 7.278 15.4 8.8v7.7h2.2v2.2H0zM8.8 22a2.117 2.117 0 0 1-1.553-.646A2.12 2.12 0 0 1 6.6 19.8H11c0 .605-.215 1.123-.646 1.554-.43.43-.949.646-1.554.646zm-4.4-5.5h8.8V8.8c0-1.21-.43-2.246-1.292-3.108C11.046 4.832 10.01 4.4 8.8 4.4c-1.21 0-2.246.43-3.108 1.292C4.832 6.554 4.4 7.59 4.4 8.8v7.7z"
				fill={props.color}
			/>
		</svg>
	);
};
