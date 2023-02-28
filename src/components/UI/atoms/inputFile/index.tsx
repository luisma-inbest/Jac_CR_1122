import React from "react";
import styles from "./InputFile.module.css";

interface Props {
	text: string;
	handleFile: (file: any) => void;
}

export const InputFile = (props: Props) => {
	const hiddenFileInput = React.useRef<HTMLInputElement>(null);

	const handleClick = (event: any) => {
		event.preventDefault();
		hiddenFileInput.current!.click();
	};

	const handleChange = (event: any) => {
		const fileUploaded = event.target.files[0];
		props.handleFile(fileUploaded);
	};

	return (
		<>
			<button className={styles.customButton} onClick={handleClick}>
				{props.text}
			</button>
			<input
				type="file"
				ref={hiddenFileInput}
				onChange={handleChange}
				style={{ display: "none" }}
			/>
		</>
	);
};
