import React from "react";

interface Props {
	color: string;
	size: number;
}

export const IconBlueprint = (props: Props) => {
	return (
		<svg width={props.size} height={props.size} viewBox="0 0 51 54" fill="none">
			<path
				d="M1.836 26.976V4.19C1.836 2.403 2.201 2 3.856 2h42.779c1.663 0 2.041.401 2.041 2.17v28.329c0 1.764-.38 2.16-2.047 2.163-1.246 0-2.492.022-3.738 0-.584-.014-.84.21-.814.845.03.617.025 1.235-.015 1.85-.074 1.001-.676 1.607-1.517 1.586-.8-.018-1.365-.61-1.44-1.568a10.65 10.65 0 0 1-.013-1.654c.06-.796-.217-1.076-.983-1.067-3.191.037-6.386.018-9.577.014-1.708 0-2.062-.39-2.063-2.242 0-1.363-.013-2.726 0-4.09.012-1.047.63-1.752 1.46-1.734.828.017 1.373.703 1.397 1.71.016.779.036 1.557 0 2.336-.039.706.182.974.875.974 4.895-.024 9.79-.024 14.686 0 .835 0 .928-.39.927-1.12-.017-6.944-.021-13.89-.011-20.837 0-1.266-.015-2.532 0-3.795.01-.585-.183-.814-.741-.813-5.048.012-10.095.02-15.143 0-.794 0-.781.476-.78 1.07V18.98c0 .597-.012 1.184-.496 1.596-.427.366-.9.534-1.441.285-.542-.25-.898-.672-.912-1.325-.024-.745-.017-1.493-.017-2.239 0-3.7-.018-7.4.015-11.1 0-.807-.153-1.15-1-1.145-6.536.035-13.073.035-19.61 0-.747 0-.996.231-.994 1.047.022 9.963.022 19.926 0 29.887 0 .846.226 1.13 1.033 1.122 3.952-.037 7.905-.017 11.859-.014.334-.014.669.005 1 .055.825.162 1.304.798 1.257 1.636-.05.89-.567 1.326-1.332 1.472a4.89 4.89 0 0 1-.912.033c-3.921 0-7.845.026-11.764-.017-.865-.01-1.172.245-1.144 1.2.06 2.173.04 4.348 0 6.521-.011.725.222.954.895.952 10.794-.015 21.587-.015 32.38 0 .73 0 .99-.255.94-1.012-.04-.584-.035-1.17.015-1.753.084-.952.67-1.527 1.478-1.525.809.002 1.427.584 1.46 1.533a51.654 51.654 0 0 1 0 4.284c-.05 1.038-.659 1.517-1.753 1.521a2951.2 2951.2 0 0 1-11.677 0H3.97c-1.834 0-2.155-.35-2.155-2.337l.02-22.681z"
				fill={props.color}
				stroke={props.color}
				stroke-width="3"
			/>
		</svg>
	);
};
