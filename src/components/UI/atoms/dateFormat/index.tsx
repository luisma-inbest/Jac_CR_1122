interface Props {
    prefixText?: string;
    date: Date;
}

const getFormattedDate = (date: Date): string => {
	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
	};

	return date.toLocaleDateString("es-MX", options);
};

const concatenatePrefix = (dateString: string, prefixText?: string) => {
    if (!prefixText) {
        return dateString;
    }

    return `${prefixText} ${dateString}`;
};

export const DateFormat = (props: Props) => {
    const dateString = getFormattedDate(props.date);
    const text = concatenatePrefix(dateString, props.prefixText);

	return <span>{dateString}</span>;
};
