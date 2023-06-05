import React from "react";

interface Props {
	color: string;
	size: string;
}
/*
	width="94"
	height="25" 
*/
/* En las propiedades debo de pasar la altura */
export const Logo = (props: Props) => {
	return (
		<svg
			style={{ width: `auto`, height: `${props.size}` }}
			viewBox="0 0 421 92"
			fill="none"
		>
			<path
				d="M310.123 9.613c-9.411 10.842-8.879 22.308-8.879 22.308v27.776s-.532 11.447 8.879 22.29c9.008 10.255 27.023 9.594 27.023 9.594h77.639c6.182 0 5.742-6.44 5.742-6.44V68.834h-66.98c-6.825 0-16.419-5.559-16.419-15.667V38.397c0-10.108 9.594-15.667 16.419-15.667h66.98V6.44S420.985 0 414.785 0H336.504c-3.284 0-18.382.514-26.381 9.613zM223.862 0h-27.647c-11.833.367-15.282 9.466-15.282 9.466l-38.14 82.115h27.39c11.979 0 15.355-7.54 15.355-7.54l17.208-37.04.183-.385c1.56-3.357 5.046-3.284 5.046-3.284h4.861s3.486-.073 5.045 3.284l.184.385 17.208 37.04s3.375 7.54 15.355 7.54H278L239.822 9.466S236.392.366 224.559 0h-.697zM115.458 0H30.133c-4.036 0-5.174 2.568-5.174 4.733V22.07H74.2c4.238.146 7.778 3.027 8.934 6.934.092.312.312 1.688.312 3.816v20.364c0 10.108-9.576 15.667-16.42 15.667H.084v16.31S-.377 91.6 5.825 91.6h77.638s18.016.642 27.023-9.595c9.393-10.842 8.88-22.29 8.88-22.29V4.073c0-3.945-3.394-4.073-3.871-4.073h-.055"
				fill={props.color}
			/>
		</svg>
	);
};
