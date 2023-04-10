export interface AgendaEvent {
	id?: string;
	title: string;
	comments: string;
	date: Date;
	time?: string;
	dateFormatted?: string;
	UserId: string;
	agencyId?: string;
	leadId?: string;
}
