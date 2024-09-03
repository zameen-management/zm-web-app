export const formatToDollar = (
	amount: number,
	includeDecimal: boolean = false
): string => {
	if (isNaN(amount)) {
		throw new Error("Invalid amount provided.");
	}

	const formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: includeDecimal ? 2 : 0,
		maximumFractionDigits: includeDecimal ? 2 : 0,
	});

	return formatter.format(amount);
};
