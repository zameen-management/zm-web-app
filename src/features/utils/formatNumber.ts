export const formatNumber = (num: number): string => {
	if (Number.isInteger(num)) {
		return num.toLocaleString("en-US");
	} else {
		return num.toLocaleString("en-US", {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		});
	}
};
