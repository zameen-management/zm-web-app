import { FC, useEffect, useState } from "react";
import { FormNavItem, StyledFormNav } from "./Applications.styled";

interface Props {
	currentPage: number;
	pageCount: number;
	goTo: (page: number) => void;
}

const ApplicationPageNav: FC<Props> = ({ currentPage, pageCount, goTo }) => {
	const [pages, setPages] = useState<number[]>([]);

	useEffect(() => {
		const temp = [];
		for (let i = 0; i < pageCount; i++) {
			temp.push(i);
		}
		setPages(temp);
	}, []);

	return (
		<StyledFormNav>
			{pages.map((page) => (
				<FormNavItem
					key={page}
					$active={currentPage === page}
					onClick={() => goTo(page)}
				>
					{page + 1}
				</FormNavItem>
			))}
		</StyledFormNav>
	);
};

export default ApplicationPageNav;
