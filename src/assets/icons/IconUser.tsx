import React from "react";

interface Props {
	color: string;
	size: string;
}

export const IconUser = (props: Props) => {
	return (
		<svg
			style={{width: `auto`, height: `${props.size}`}}
			viewBox="0 0 38 38"
			fill="none"
		>
			<path
				d="M37.5 31.35v6.15H.5v-6.15c0-1.255.322-2.402.966-3.45a6.421 6.421 0 0 1 2.56-2.398A34.81 34.81 0 0 1 11.4 22.78 32.218 32.218 0 0 1 19 21.875c2.573 0 5.106.302 7.601.905a34.808 34.808 0 0 1 7.372 2.722 6.42 6.42 0 0 1 2.56 2.397 6.456 6.456 0 0 1 .967 3.451zm-33.25 1.9v.5h29.5v-2.4c0-.523-.132-1.01-.398-1.448h-.001a2.818 2.818 0 0 0-1.046-1.008l-.01-.005-.009-.005a31.512 31.512 0 0 0-6.576-2.444 28.09 28.09 0 0 0-6.71-.815 28.09 28.09 0 0 0-6.71.815 31.514 31.514 0 0 0-6.576 2.444l-.01.005-.01.005c-.433.24-.782.58-1.042 1.007a2.726 2.726 0 0 0-.402 1.449v1.9zM19 18.5c-2.479 0-4.588-.877-6.356-2.644C10.877 14.088 10 11.979 10 9.5s.877-4.588 2.644-6.356C14.412 1.377 16.521.5 19 .5s4.588.877 6.356 2.644C27.123 4.912 28 7.021 28 9.5s-.877 4.588-2.644 6.356C23.588 17.623 21.479 18.5 19 18.5zm0-3.75c1.44 0 2.686-.519 3.71-1.543 1.022-1.023 1.54-2.267 1.54-3.707s-.518-2.685-1.54-3.707C21.685 4.769 20.44 4.25 19 4.25s-2.685.519-3.707 1.543C14.269 6.815 13.75 8.06 13.75 9.5s.519 2.685 1.543 3.707C16.315 14.231 17.56 14.75 19 14.75z"
				fill={props.color}
				stroke={props.color}
			/>
		</svg>
	);
};
