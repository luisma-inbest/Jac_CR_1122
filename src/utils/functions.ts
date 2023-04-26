export const getBase64 = (file: any) => {
	let reader = new FileReader();
	reader.readAsDataURL(file);
	return new Promise<string>((resolve, reject) => {
		reader.onload = () => {
			resolve(reader.result?.toString()!);
		};
		reader.onerror = function (error) {
			reject("Error: " + error);
		};
	});
};

export const windowTop = () => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth",
	});
};
