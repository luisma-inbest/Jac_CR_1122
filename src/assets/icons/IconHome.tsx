import React from "react";

interface Props {
	color: string;
	size: number;
}

export const IconHome = (props: Props) => {
	return (
		<svg width={props.size} height={props.size} viewBox="0 0 27 30" fill="none">
			<path
				d="M2.791 26.5H8.625V16.25H18.041V26.5H23.875V10.667L13.333 2.75L2.791 10.667V26.5ZM2.791 29.292C2.01367 29.292 1.354 29.0213 0.812 28.48C0.270667 27.938 0 27.278 0 26.5V10.667C0 10.2223 0.0970004 9.80567 0.291 9.417C0.485667 9.02833 0.763667 8.709 1.125 8.459L11.666 0.542C11.916 0.347333 12.18 0.208333 12.458 0.125C12.736 0.0416667 13.0277 0 13.333 0C13.6383 0 13.93 0.0416667 14.208 0.125C14.486 0.208333 14.75 0.347333 15 0.542L25.541 8.459C25.9023 8.709 26.1803 9.02833 26.375 9.417C26.569 9.80567 26.666 10.2223 26.666 10.667V26.5C26.666 27.278 26.3953 27.938 25.854 28.48C25.312 29.0213 24.6523 29.292 23.875 29.292H15.291V19H11.375V29.292H2.791Z"
				fill={props.color}
			/>
		</svg>
	);
};
