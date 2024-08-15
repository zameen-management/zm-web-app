const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

export const getTextDate = (date: string): string => {
	if (date.split("-").length !== 3) return "";
	const [year, month, day] = date.split("-");
	const monthIndex = parseInt(month, 10) - 1;
	return `${months[monthIndex]} ${day}, ${year}`;
};
