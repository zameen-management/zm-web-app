import { FC } from "react";

interface I {
	current: number;
	total: number;
}

const PageCount: FC<I> = ({ current, total }) => {
	return (
		<p>
			{current} / {total}
		</p>
	);
};

export default PageCount;
