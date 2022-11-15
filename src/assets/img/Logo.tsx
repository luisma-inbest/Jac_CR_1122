import React from "react";

interface Props {
	color: string;
	size: number;
}
/*
	width="94"
	height="25" 
*/
/* En las propiedades debo de pasar la altura */
export const Logo = (props: Props) => {
	return (
		<svg
			style={{width: `${props.size * 3.8}`, height: `${props.size}`}}
			viewBox="0 0 94 25"
			fill="none"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M27.058.619v16.057c0 4.282-3.25 7.76-7.232 7.76H7.163C3.25 24.436 0 20.957 0 16.676v-2.141h6.167c1.258 0 1.857.468 1.857 1.806v.335c0 1.472 1.06 3.144 2.652 3.144h5.704c1.591 0 2.652-1.672 2.652-3.144V3.496c0-1.606.729-2.877 2.453-2.877h5.573zm1.194 23.817h5.835c.663 0 1.525-.602 1.923-1.204l8.621-14.05c.199-.335.464-.535.795-.535.332 0 .597.268.797.535l3.38 5.42c.398.669.132 1.003-.663 1.003h-4.707c-.663 0-1.591.535-1.923 1.204-.398.67-.796 1.405-1.194 2.074-.53.873-.332 1.539.663 1.539h10.08c1.061 0 1.459.268 1.99 1.137l.994 1.673c.398.602 1.257 1.204 1.923 1.204h5.836c.73 0 .929-.602.53-1.204L50.466 1.822C50.07 1.152 49.21.617 48.543.617H42.31c-.663 0-1.526.535-1.923 1.205L27.72 23.232c-.399.602-.199 1.204.53 1.204zm44.032-15.12C74.406 5.367 79.71 4.23 83.69 7.776c.398.334.53.668 1.061.668h7.231c.865 0 1.393-.267 1.525-.802.133-.335 0-.803-.463-1.269C89.994 2.627 85.616.354 79.582.02 73.013-.251 66.05 2.425 63 8.047c-1.393 2.608-1.393 6.289 0 8.898 3.05 5.62 10.013 8.362 16.579 8.028 4.84-.268 8.62-1.74 11.538-4.282.928-.804 1.658-1.74 2.454-2.677.464-.535.464-1.004.398-1.337-.133-.47-.73-.736-1.526-.736h-7.231c-.663 0-1.459 1.337-2.056 1.739-.729.602-1.392 1.07-2.188 1.337-3.38 1.138-7.03-.267-8.688-3.344-1.058-1.942-1.058-4.35.004-6.358z"
				fill={props.color}
			/>
		</svg>
	);
};
