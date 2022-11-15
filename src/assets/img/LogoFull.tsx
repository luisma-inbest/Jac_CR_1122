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
export const LogoFull = (props: Props) => {
	return (
		<svg
			style={{width: `${props.size * 3.8}`, height: `${props.size}`}}
			viewBox="0 0 146 58"
			fill="none"
		>
			<g clipPath="url(#hksa7w71ma)" fill={props.color}>
				<path d="M107.428 3.319c-3.249 3.743-3.066 7.7-3.066 7.7v9.59s-.183 3.951 3.066 7.694c3.11 3.54 9.331 3.313 9.331 3.313h26.808c2.135 0 1.983-2.223 1.983-2.223v-5.63h-23.128c-2.356 0-5.669-1.92-5.669-5.41v-5.098c0-3.49 3.313-5.408 5.669-5.408h23.128V2.223S145.708 0 143.567 0h-27.03c-1.134 0-6.347.177-9.109 3.319zM77.643 0h-9.546C64.01.127 62.82 3.268 62.82 3.268L49.65 31.616h9.458c4.137 0 5.302-2.603 5.302-2.603l5.942-12.787.063-.133c.539-1.16 1.742-1.134 1.742-1.134h1.679s1.204-.025 1.742 1.134l.063.133 5.942 12.787s1.166 2.603 5.302 2.603h9.451L83.154 3.268S81.97.127 77.884 0h-.241zM40.212 0H10.75C9.356 0 8.963.887 8.963 1.634v5.985h17.002a3.343 3.343 0 0 1 3.085 2.394c.032.108.108.582.108 1.317v7.03c0 3.49-3.306 5.409-5.67 5.409H.375v5.63s-.159 2.223 1.982 2.223h26.808s6.221.222 9.331-3.312c3.244-3.743 3.066-7.695 3.066-7.695V1.406C41.561.044 40.39 0 40.225 0h-.02M84.294 45.036c0 .355-.285.64-.64.64a.638.638 0 0 1-.64-.64c0-.355.286-.64.64-.64.355 0 .64.285.64.64zM84.294 50.812c0 .354-.285.64-.64.64a.638.638 0 0 1-.64-.64c0-.355.286-.64.64-.64.355 0 .64.285.64.64z" />
				<path d="M82.603 50.812c0-.576.469-1.051 1.051-1.051h.051v-3.68h-.05a1.049 1.049 0 0 1-1.052-1.051c0-.583.469-1.052 1.051-1.052h.045l-.026-.164c-.044-.152-.158-.14-.158-.14h-.38l-.083-.019h-.297l-.177.178-.362.126-.354 1.216-.026.178-.107.247c-1.084 1.602-1.04 2.869-1.04 2.869-.082.411-.018 2.197-.018 2.197l-.076.342.044.032.127-.095c.38.411 1.526.722 1.526.722l.165.152c.304.076.526 0 .526 0l.082.012c.108.114.222-.025.235-.038a1.05 1.05 0 0 1-.697-.987" />
				<path d="M86.467 47.037a.806.806 0 0 0-1.026 1.241 4.612 4.612 0 1 1-6.03.038.806.806 0 0 0-.481-1.45c-.21 0-.4.083-.54.21a6.18 6.18 0 0 0-2.16 4.705A6.223 6.223 0 0 0 82.452 58a6.223 6.223 0 0 0 6.22-6.22 6.21 6.21 0 0 0-2.198-4.744M1.064 51.572c.013-.735.089-1.38.254-2.116.164-.81.36-1.437.658-2.235a61.266 61.266 0 0 1 5.942-.298c1.939 0 3.96.076 5.942.24l-.177.868a71.568 71.568 0 0 0-5.473-.228c-1.787 0-3.497.09-5.207.228a11.23 11.23 0 0 0-.374 1.425 10 10 0 0 0-.228 1.35c3.452.316 7.05.253 10.636.778-.045.843-.12 1.533-.298 2.337-.178.887-.393 1.577-.722 2.477-2.027.183-4.08.272-6.062.272-1.983 0-3.991-.044-5.955-.209l.196-.868c1.768.12 3.598.197 5.55.197a66.88 66.88 0 0 0 5.25-.21c.178-.538.318-1.095.438-1.665.12-.526.209-1.051.253-1.577-3.496-.33-7.05-.317-10.616-.766M28.19 48.088c-2.674-.152-4.29-.196-5.734-.209l-1.83 8.639H19.32l1.83-8.639c-1.456.013-3.103.057-5.82.21l.196-.944a93.302 93.302 0 0 1 12.852 0l-.196.943h.006zM33.453 48.063l-3.617 4.813h8.267l-1.578-4.813a16.644 16.644 0 0 0-1.533-.076c-.525 0-1.051.032-1.545.076m4.187-.93 2.983 9.385H39.3l-.9-2.73h-9.255l-2.04 2.73h-1.317l6.493-8.759-.81-.405.044-.165c.601-.044 1.634-.12 2.698-.152.33 0 .646-.013.988-.013.843 0 1.559.032 2.433.102M44.21 56.518h-1.293l1.875-8.848-.798-.45.032-.151h6.93c1.919 0 4.08.012 6.011.152-.032.9-.101 1.647-.298 2.552a20.834 20.834 0 0 1-.867 3.002c-1.622.076-3.434.089-5.132.108l4.486 3.641h-1.724l-5.207-4.211.064-.273h2.4c1.382 0 2.73-.012 4.048-.075.241-.704.438-1.394.583-2.103.152-.69.222-1.197.273-1.875-1.59-.032-3.168-.044-4.827-.044h-4.739l-1.811 8.581-.007-.006zM71.41 48.088c-2.673-.152-4.288-.196-5.733-.209l-1.83 8.639h-1.305l1.83-8.639c-1.457.013-3.104.057-5.821.21l.196-.944a93.302 93.302 0 0 1 12.853 0l-.196.943h.006zM106.168 56.518h-1.305l-6.227-8.43a38.695 38.695 0 0 0-2.293-.063l-1.799 8.487H93.24l1.875-8.848-.779-.45.032-.151h1.241c1.293 0 2.598.031 4.004.107l5.612 7.708 1.647-7.816h1.293l-1.996 9.45v.006zM111.166 55.498c1.698.152 3.453.21 5.176.21 1.723 0 3.509-.064 5.264-.21.373-1.241.678-2.432.944-3.705.285-1.273.462-2.457.627-3.705a58.536 58.536 0 0 0-5.176-.209 61.45 61.45 0 0 0-5.264.21 48.121 48.121 0 0 0-.956 3.704c-.273 1.273-.45 2.458-.615 3.705zm4.967 1.172c-2.173 0-4.333-.101-6.481-.298.209-1.558.437-3.014.767-4.572a71.014 71.014 0 0 1 1.172-4.573 75.935 75.935 0 0 1 6.632-.298c2.179 0 4.333.108 6.48.298-.209 1.558-.437 3.015-.779 4.573a63.187 63.187 0 0 1-1.153 4.572 75.896 75.896 0 0 1-6.632.298M136.295 48.013l-4.998 8.46a7.264 7.264 0 0 1-1.127.09c-.45 0-.868-.032-1.318-.09l-1.349-8.606-.076-.197-.78-.45.032-.151h2.072l1.273 8.486c.076.032.177.032.285.032.089 0 .196 0 .253-.032l4.954-8.43a8.691 8.691 0 0 1 1.184-.075c.374 0 .748.013 1.172.076l1.35 8.43c.063.031.164.031.253.031.108 0 .209 0 .285-.032l4.878-8.486H146l-5.461 9.405c-.481.063-.912.088-1.349.088-.361 0-.703-.031-1.096-.088l-1.394-8.461c-.057-.013-.12-.013-.209-.013-.076 0-.133 0-.196.013z" />
			</g>
			<defs>
				<clipPath>
					<path fill={props.color} d="M0 0h146v58H0z" />
				</clipPath>
			</defs>
		</svg>
	);
};
