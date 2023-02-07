interface ContactsListItem {
	contactLink: string;
	copyIcon: boolean;
}

export const contactsList: ContactsListItem[] = [
	{
		contactLink: 'https://www.google.com/maps/search/?api=1&query=rivne',
		copyIcon: false,
	},
	{
		contactLink: 'tel:+380971235733',
		copyIcon: true,
	},
	{
		contactLink: 'https://t.me/AmelianceSkyMusic',
		copyIcon: true,
	},
	{
		contactLink: 'mailto:radzhab@ukr.net',
		copyIcon: true,
	},
];
