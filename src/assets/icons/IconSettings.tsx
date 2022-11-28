import React from "react";

interface Props {
	color: string;
	size: number;
}

export const IconSettings = (props: Props) => {
	return (
		<svg
			style={{width: `auto`, height: `${props.size}`}}
			viewBox="0 0 50 50"
			fill="none"
		>
			<path
				d="m17.988 49.53-.985-7.925a9.287 9.287 0 0 1-1.508-.743 20.145 20.145 0 0 1-1.388-.928l-7.33 3.095L0 31.266l6.345-4.83a5.948 5.948 0 0 1-.061-.836v-1.672c0-.268.02-.546.061-.835L0 18.264 6.776 6.501l7.331 3.095c.452-.33.925-.64 1.417-.928a12.39 12.39 0 0 1 1.479-.743L17.988 0h13.553l.986 7.925a9.378 9.378 0 0 1 1.51.743c.472.289.934.598 1.386.928l7.33-3.095 6.777 11.763-6.345 4.83c.04.288.061.566.061.834V25.6c0 .269-.04.548-.123.837l6.345 4.829-6.776 11.763-7.27-3.095c-.451.33-.923.64-1.416.928-.493.29-.986.537-1.479.743l-.986 7.925H17.988zm6.9-16.097c2.382 0 4.415-.846 6.1-2.539 1.683-1.692 2.525-3.735 2.525-6.129 0-2.394-.842-4.437-2.526-6.13-1.684-1.692-3.717-2.538-6.099-2.538-2.423 0-4.466.846-6.13 2.539-1.663 1.692-2.494 3.735-2.494 6.129 0 2.394.83 4.437 2.493 6.13 1.665 1.692 3.708 2.538 6.131 2.538z"
				fill={props.color}
			/>
		</svg>
	);
};
