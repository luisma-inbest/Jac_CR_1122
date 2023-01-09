export enum DateFormatType {
    TIME_ONLY,
    DATE_ONLY,
    DATE_AND_TIME,
}

interface Props {
    prefixText?: string;
    date: Date;
    formatType: DateFormatType;
}

const getFormattedDate = (date: Date, formatType: DateFormatType): string => {
    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
		month: "2-digit",
		day: "2-digit",
	};
    
    // TODO: cambiar formato de fecha a partir de `formatType`.
	return date.toLocaleDateString("es-MX", options);
};

const concatenatePrefix = (dateString: string, prefixText?: string) => {
    if (!prefixText) {
        return dateString;
    }

    return `${prefixText} ${dateString}`;
};

export const DateFormat = (props: Props) => {
    const dateString = getFormattedDate(props.date, props.formatType);
    const text = concatenatePrefix(dateString, props.prefixText);

	return <span>{text}</span>;
};
